function Favorite({ flag = true }: { flag?: boolean }) {
    return (
        <button
            className="favorite"
            name="favorite"
            value={flag ? "false" : "true"}
            aria-label={
                flag
                    ? "Remove from favorites"
                    : "Add to favorites"
            }>{flag ? "★" : "☆"}</button>
    )
}

export default Favorite;