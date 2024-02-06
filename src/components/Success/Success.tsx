import "./Success.css";

export default function Success({ goToFirstStage }: { goToFirstStage: () => void }) {
    return (
        <div className="centered-container">
            <div className="valentine-container">
                <div className="text-container">Time to explore the app hehe!</div>
                <div className="text-container">Try clicking NO this time</div>
                <div className="text-container">Click continue to go back to first screen</div>
                <button
                    className={"continue-button"}
                    onClick={() => goToFirstStage()}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}