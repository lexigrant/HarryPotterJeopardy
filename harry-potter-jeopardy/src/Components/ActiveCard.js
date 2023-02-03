
function ActiveCard({activeCardData, playerTurn, showAnswer, cleanup, toggleTurn, updatePoints}) {

    return (
        <>
            <button style={{ fontFamily: "HarryP-MVZ6w" }} onClick={() => {
                cleanup()
            }}>Exit</button>
            {!showAnswer ? <p style={{ fontFamily: "HarryP-MVZ6w" }}>{activeCardData.trivia}</p> : undefined}
            {showAnswer ?
                <>
                    <p style={{ fontFamily: "HarryP-MVZ6w" }}>{activeCardData.answer}</p>
                    <p>Did you answer correctly?</p>
                    <button onClick={() => {
                        console.log(playerTurn, activeCardData.value)
                        updatePoints(playerTurn, activeCardData.value)
                        cleanup()
                    }}>Yes</button>
                    <button onClick={() => {
                        updatePoints(playerTurn, activeCardData.value * -1)
                        toggleTurn()
                        cleanup()
                    }}>No</button>
                </>
                : undefined}
        </>
    )
}

export default ActiveCard;