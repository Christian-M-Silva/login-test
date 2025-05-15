import type { labelProp } from "../../types";

export function Button({ label }: labelProp) {
    return (
        <button
            className={`rounded-2xl bg-blue-600 text-white px-6 py-2 font-semibold shadow-md transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1`}
        >
            {label}
        </button>
    );
}