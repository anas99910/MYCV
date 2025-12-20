import { useState, useEffect, useCallback, useRef } from 'react';
import { X, RefreshCw, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SPEED = 150;

const SnakeGame = ({ onClose }) => {
    const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
    const [food, setFood] = useState({ x: 15, y: 5 });
    const [direction, setDirection] = useState('RIGHT');
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(parseInt(localStorage.getItem('snakeHighScore') || '0'));
    const gameLoopRef = useRef();
    const directionRef = useRef('RIGHT');

    const generateFood = useCallback((currentSnake) => {
        let newFood;
        while (true) {
            newFood = {
                x: Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random() * GRID_SIZE)
            };
            const isOnSnake = currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
            if (!isOnSnake) break;
        }
        return newFood;
    }, []);

    const resetGame = () => {
        setSnake([{ x: 10, y: 10 }]);
        setFood(generateFood([{ x: 10, y: 10 }]));
        setDirection('RIGHT');
        directionRef.current = 'RIGHT';
        setGameOver(false);
        setScore(0);
    };

    const moveSnake = useCallback(() => {
        if (gameOver) return;

        setSnake(prevSnake => {
            const head = prevSnake[0];
            const newHead = { ...head };

            switch (directionRef.current) {
                case 'UP': newHead.y -= 1; break;
                case 'DOWN': newHead.y += 1; break;
                case 'LEFT': newHead.x -= 1; break;
                case 'RIGHT': newHead.x += 1; break;
                default: break;
            }

            // Check collisions
            if (
                newHead.x < 0 ||
                newHead.x >= GRID_SIZE ||
                newHead.y < 0 ||
                newHead.y >= GRID_SIZE ||
                prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)
            ) {
                setGameOver(true);
                if (score > highScore) {
                    setHighScore(score);
                    localStorage.setItem('snakeHighScore', score.toString());
                }
                return prevSnake;
            }

            const newSnake = [newHead, ...prevSnake];

            // Check food
            if (newHead.x === food.x && newHead.y === food.y) {
                setScore(s => s + 10);
                setFood(generateFood(newSnake));
                // Don't pop tail
            } else {
                newSnake.pop();
            }

            return newSnake;
        });
    }, [food, gameOver, generateFood, score, highScore]);

    useEffect(() => {
        const handleKeyPress = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    if (directionRef.current !== 'DOWN') directionRef.current = 'UP';
                    break;
                case 'ArrowDown':
                    if (directionRef.current !== 'UP') directionRef.current = 'DOWN';
                    break;
                case 'ArrowLeft':
                    if (directionRef.current !== 'RIGHT') directionRef.current = 'LEFT';
                    break;
                case 'ArrowRight':
                    if (directionRef.current !== 'LEFT') directionRef.current = 'RIGHT';
                    break;
                default: break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    useEffect(() => {
        if (!gameOver) {
            gameLoopRef.current = setInterval(moveSnake, Math.max(50, INITIAL_SPEED - Math.floor(score / 50) * 10));
        }
        return () => clearInterval(gameLoopRef.current);
    }, [moveSnake, gameOver, score]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
        >
            <div className="bg-slate-900 border-2 border-green-500 rounded-lg p-6 shadow-2xl max-w-lg w-full relative">
                <button
                    onClick={onClose}
                    className="absolute -top-4 -right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="flex justify-between items-center mb-6 text-green-400 font-mono">
                    <div className="flex items-center gap-2">
                        <Trophy size={20} className="text-yellow-500" />
                        <span className="text-yellow-500">HI-SCORE: {highScore}</span>
                    </div>
                    <div className="text-xl font-bold">SCORE: {score}</div>
                </div>

                <div
                    className="bg-black border border-green-900 mx-auto relative"
                    style={{
                        width: GRID_SIZE * CELL_SIZE,
                        height: GRID_SIZE * CELL_SIZE,
                        display: 'grid',
                        gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`
                    }}
                >
                    {gameOver && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-10">
                            <h2 className="text-4xl font-bold text-red-500 mb-4 font-mono">GAME OVER</h2>
                            <button
                                onClick={resetGame}
                                className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded font-mono transition-colors"
                            >
                                <RefreshCw size={20} />
                                RESTART
                            </button>
                        </div>
                    )}

                    {/* Render Grid */}
                    {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
                        const x = i % GRID_SIZE;
                        const y = Math.floor(i / GRID_SIZE);
                        const isSnake = snake.some(s => s.x === x && s.y === y);
                        const isFood = food.x === x && food.y === y;
                        const isHead = snake[0].x === x && snake[0].y === y;

                        return (
                            <div
                                key={i}
                                className={`w-full h-full border-[0.5px] border-green-900/10
                                    ${isHead ? 'bg-green-400' : ''}
                                    ${isSnake && !isHead ? 'bg-green-600' : ''}
                                    ${isFood ? 'bg-red-500 animate-pulse' : ''}
                                `}
                                style={{ borderRadius: isSnake ? '4px' : '0' }}
                            />
                        );
                    })}
                </div>

                <div className="mt-6 text-center text-slate-400 font-mono text-sm">
                    Use Arrow Keys to Move • Eat Red Pixels • Avoid Walls
                </div>
            </div>
        </motion.div>
    );
};

export default SnakeGame;
