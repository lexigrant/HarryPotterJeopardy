
function ActiveCard({activeCardData, playerTurn, showAnswer, cleanup, toggleTurn, updatePoints}) {

    return (
        <>
            <button style={{ fontFamily: "HarryP-MVZ6w" }} onClick={() => {
                cleanup()
            }}>Exit</button>
            {!showAnswer ? <p className="trivia" style={{ fontFamily: "HarryP-MVZ6w" }}>{activeCardData.trivia}</p> : undefined}
            {showAnswer ?
                <>
                    <p className="trivia" style={{ fontFamily: "HarryP-MVZ6w" }}>{activeCardData.answer}</p>
                    <p className="answerCorrectly" style={{ fontFamily: "HarryP-MVZ6w" }}>Did you answer correctly?</p>
                    <button style={{ fontFamily: "HarryP-MVZ6w" }} onClick={() => {
                        console.log(playerTurn, activeCardData.value)
                        updatePoints(playerTurn, activeCardData.value)
                        cleanup()
                    }}>Yes</button>
                    <button style={{ fontFamily: "HarryP-MVZ6w" }} onClick={() => {
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