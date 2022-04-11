export function LeftIcon({ size = 8, color = 'currentColor' }: any) {
    return (
        <svg
            width={size}
            height={size * 1.75}
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.78 12.02L6.6 13.2L-9.53674e-07 6.6L6.6 0L7.78 1.18L2.36 6.6L7.78 12.02Z"
                fill={color}
            />
        </svg>
    );
}

export function RightIcon({ size = 8, color = 'currentColor' }: any) {
    return (
        <svg
            width={size}
            height={size * 1.75}
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0.220001 12.02L1.4 13.2L8 6.6L1.4 0L0.220001 1.18L5.64 6.6L0.220001 12.02Z"
                fill={color}
            />
        </svg>
    );
}