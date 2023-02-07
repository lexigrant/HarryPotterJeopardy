
function ActiveCard({ activeCardData, playerTurn, showAnswer, cleanup, toggleTurn, updatePoints, answerEarlyCallback }) {

    return (
        <>

            {!showAnswer ?
                <>
                    <button className="showAnswerButton" style={{ fontFamily: "HarryP-MVZ6w" }} onClick={answerEarlyCallback}>Show Answer</button>
                    <p className="trivia" style={{ fontFamily: "HarryP-MVZ6w" }}>{activeCardData.trivia}</p>
                </>
                : undefined}
            {showAnswer ?
                <>
                    <p className="trivia" style={{ fontFamily: "HarryP-MVZ6w" }}>{activeCardData.answer}</p>
                    <p className="answerCorrectly" style={{ fontFamily: "HarryP-MVZ6w" }}>Did you answer correctly?</p>
                    <button className="yesOrNo" style={{ fontFamily: "HarryP-MVZ6w" }} onClick={() => {
                        console.log(playerTurn, activeCardData.value)
                        updatePoints(playerTurn, activeCardData.value)
                        cleanup()
                    }}>Yes</button>
                    <button className="yesOrNo" style={{ fontFamily: "HarryP-MVZ6w" }} onClick={() => {
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