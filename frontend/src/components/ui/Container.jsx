export default function Container({ children, className = '', ...props }) {
    return (
        <div
            className={`${className} max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8`}
            {...props}
        >
            {children}
        </div>
    );
}
