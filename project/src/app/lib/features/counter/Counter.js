import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
    const {value} = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button
                    className="mr-2 p-2 border border-red-400 rounded"
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span className="mr-2">{value}</span>
                <button
                    className="p-2 border border-red-400 rounded"
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}
