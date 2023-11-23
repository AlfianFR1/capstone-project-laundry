export default function FormGroup({ className = '', children, ...props }) {
    return (
        <div className={`${className} space-y-2`} {...props}>
            {children}
        </div>
    );
}
