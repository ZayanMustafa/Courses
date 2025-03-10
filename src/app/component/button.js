export default function Button({ children, type = "button", className = "", ...props }) {
    return (
      <button
        type={type}
        className={`w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }