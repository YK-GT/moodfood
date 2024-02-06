import { useState } from "react";
import "./Ask.css";


export default function Ask({ goToNextStage }: { goToNextStage: () => void }) {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const yesButtonSize = noCount * 20 + 16;

    const handleNoClick = () => {
        setNoCount(noCount + 1);
    };

    const getNoButtonText = () => {
        const phrases = [
            "No",
            "Are you sure?",
            "Really sure?",
            "Think again!",
            "Last chance!",
            "Surely not?",
            "You might regret this!",
            "Give it another thought!",
            "Are you absolutely certain?",
            "This could be a mistake!",
            "Have a heart!",
            "Don't be so cold!",
            "Change of heart?",
            "Wouldn't you reconsider?",
            "Is that your final answer?",
            "You're breaking my heart ;(",
        ];

        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    return (
        <div className="centered-container">
            <div className="valentine-container">
                {yesPressed ? (
                    <>
                        <img className="h-[200px]"
                            alt="yay-bear"
                            style={{ width: "400x", height: "240px" }}
                            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
                        <div className="text-container">Ok yay!!!</div>
                        <div className="text-container">We go for dinner on 14th yea?</div>
                        <div className="text-container">Call and tell me hehe</div>
                        <button
                    className={"yes-button"}
                    onClick={() => goToNextStage()}
                >
                    Yea mi will
                </button>
                    </>
                ) : (
                    <>
                        <img
                            className="h-[200px]"
                            style={{ width: "400x", height: "240px" }}
                            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                            alt="cute-bear"
                        />
                        <div className="text-container">Will you be my Valentine?</div>
                        <div>
                            <button
                                className={"yes-button"}
                                style={{ fontSize: yesButtonSize }}
                                onClick={() => setYesPressed(true)}
                            >
                                Yes
                            </button>

                            <button onClick={handleNoClick} className="no-button">
                                {noCount === 0 ? "No" : getNoButtonText()}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}