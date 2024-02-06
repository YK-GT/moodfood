import "./Password.css";
import { useRef } from "react";

export default function Password({ goToNextStage }: { goToNextStage: () => any }) {
    const passwordRef = useRef<HTMLInputElement>(null);
    const cyrb53 = (str?: string, seed = 0) => {
        if (str === undefined) return 0;
        let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
        for(let i = 0, ch; i < str.length; i++) {
            ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
        h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
        h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
      
        return 4294967296 * (2097151 & h2) + (h1 >>> 0);
    };

    const handlePasswordCheck = () => {
        const passwordValue = passwordRef.current?.value;
        const hash = cyrb53(passwordValue?.toLowerCase());
        if (hash === 2851937044291219) {
            passwordRef.current?.classList.remove("error");
            goToNextStage();
        } else {
            passwordRef.current?.classList.add("error");
        }
    };

    return (
        <div className="centered-container">
            <div className="valentine-container">
                <img
                    alt="question-bear"
                    className="h-[200px]"
                    style={{ width: "400x", height: "240px" }}
                    src="https://gifdb.com/images/high/animated-cute-baby-bear-question-mark-dm4sq6mc4wdj7wmc.gif"
                />
                <div className="text-container">Only the right person is allowed to enter.</div>
                <div className="text-container">Who are you?</div>
                <input
                    className="password-input"
                    ref={passwordRef}
                    onChange={() => passwordRef.current?.classList.remove("error")}
                />
                <button
                    className={"continue-button"}
                    onClick={() => handlePasswordCheck()}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}