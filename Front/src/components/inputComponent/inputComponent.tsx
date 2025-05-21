import type { InputProps } from "../../types";

export function Input({ label, ...rest }: InputProps) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 flex flex-col">
                <span>
                    {label}
                </span>
                <input
                    className="rounded-2xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    {...rest}
                />
            </label>
        </div>
    );
}