export default function Form({
    id,
    className = '',
    children,
    onSubmit,
    ...props
}) {
    return (
        <form
            id={id}
            onSubmit={onSubmit}
            className={`${className} space-y-4`}
            {...props}
        >
            {children}
        </form>
    );
}
