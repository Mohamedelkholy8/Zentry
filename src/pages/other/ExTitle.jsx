function ExTitle({ isZ, title, mini = [] }) {
    return (
        <>
            <h6 className="font-black text-3xl">
                {isZ && <span className="text-sm">Z </span>}
                {title}</h6>
            <p className="opacity-[0.5] text-xs">
                {mini.map((x, i) => (
                    <span key={i}>
                        {x} <br />
                    </span>
                ))}
            </p>
        </>
    )
}
export default ExTitle