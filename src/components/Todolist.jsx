export const Todolist = ({ data }) => {
    return (
        <div>
            {data.map((item) => {
                return <div key={item._id}>{item.title}</div>;
            })}
        </div>
    )
}
