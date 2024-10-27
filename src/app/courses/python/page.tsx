"use client"
import SpookyCharacterDialogue from "@/components/character-dialogue";
import Component from "@/components/js-challenges";
import { Popup } from "@/components/popup";
import PythonComponent from "@/components/python-challenges";
import StreamTextArea from "@/components/textarea-stream";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react'


export default function Python() {

    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        if (currentStep < 7) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    };

    const spookyPhrases = [
        "You walk into a graveyard all by yourself on Halloween night. Everyone told you not to but you weren't scared of anything",
        "Or so you thought...",
        "You had no idea what was coming"
    ]

    const [isButtonActive, setIsButtonActive] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsButtonActive(true);
        }, 12000); // 12 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {currentStep === 0 && (
                <div style={{
                    backgroundImage: 'url("/images/og-python-image.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                }}
                    className="w-screen flex flex-col items-center justify-center p-4">
                    <StreamTextArea spookyPhrases={spookyPhrases} />
                    <Button
                        className="mt-4 rounded-lg"
                        onClick={handleNext}
                        disabled={!isButtonActive}
                    >
                        Next
                    </Button>
                </div>


            )}
            {currentStep === 1 && (
                <div
                    style={{
                        backgroundImage: 'url("/images/og-python-image.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '100vh',
                    }}
                    className="w-screen flex flex-col items-center p-4"
                >
                    <div className="w-full flex justify-center">
                        <SpookyCharacterDialogue
                            text="Ghost: HAHAHA! How foolish of you to walk into this graveyard all by yourself. Now you're stuck here forever"
                            imageSrc={'/images/py-ghost.png'}
                        />
                    </div>

                    <div className="w-full flex justify-center mt-4">
                        <Button
                            className="rounded-lg"
                            onClick={handleNext}
                            disabled={!isButtonActive}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            )}
            {currentStep === 2 && (
                <div
                    style={{
                        backgroundImage: 'url("/images/og-python-image.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '100vh',
                    }}
                    className="w-screen flex flex-col items-center p-4"
                >
                    <div className="w-full flex justify-center">
                        <SpookyCharacterDialogue
                            text="Nice Ghost: No you're not! Just complete these challenges to escape."
                            imageSrc={'/images/nice-ghost.png'}
                            isLeft={false}
                        />
                    </div>

                    <div className="w-full flex justify-center mt-4">
                        <Button
                            className="rounded-lg"
                            onClick={handleNext}
                            disabled={!isButtonActive}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            )}
            {currentStep === 3 && (
                <div
                    style={{
                        backgroundImage: 'url("/images/og-python-image.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '100vh',
                    }}
                    className="w-screen flex flex-col items-center p-4"
                >
                    <div className="w-full flex justify-center">
                        <SpookyCharacterDialogue
                            text="Ghost: ...Why would you tell them that."
                            imageSrc={'/images/py-ghost.png'}
                        />
                    </div>

                    <div className="w-full flex justify-center mt-4">
                        <Button
                            className="rounded-lg"
                            onClick={handleNext}
                            disabled={!isButtonActive}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            )}
            {currentStep === 4 && (
                <div
                    style={{
                        backgroundImage: 'url("/images/og-python-image.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '100vh',
                    }}>
                    <div className="w-screen flex justify-center">

                        <PythonComponent />
                        <Button
                            className="rounded-lg"
                            onClick={handleNext}
                            disabled={!isButtonActive}
                        >
                            Done
                        </Button>
                    </div>
                </div>

            )}
            {currentStep === 5 && (
                <div
                    style={{
                        backgroundImage: 'url("/images/og-python-image.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '100vh',
                    }}
                    className="w-screen flex flex-col items-center p-4"
                >
                    <div className="w-full flex justify-center">
                        <SpookyCharacterDialogue
                            text="Nice Ghost: Yay! I knew you could do it! Great Job!"
                            imageSrc={'/images/nice-ghost.png'}
                        />
                    </div>

                    <div className="w-full flex justify-center mt-4">
                        <Button
                            className="rounded-lg"
                            onClick={handleNext}
                            disabled={!isButtonActive}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            )}
            {currentStep === 6 && (
                <div
                    style={{
                        backgroundImage: 'url("/images/og-python-image.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '100vh',
                    }}
                    className="w-screen flex flex-col items-center p-4"
                >
                    <div className="w-full flex justify-center">
                        <SpookyCharacterDialogue
                            text="Ghost: Ahhhh! I guess you can go"
                            imageSrc={'/images/og-ghost.png'}
                        />
                    </div>

                    <div className="w-full flex justify-center mt-4">
                        <Button
                            className="rounded-lg"
                            onClick={handleNext}
                            disabled={!isButtonActive}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            )}

            {currentStep === 7 && (
                <div
                    style={{
                        backgroundImage: 'url("/images/og-python-image.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '100vh',
                    }}
                    className="w-screen flex flex-col items-center p-4"
                >


                    <div className="w-full flex justify-center mt-4">
                        <Popup type="Python to escape the evil ghost!" />
                    </div>
                </div>
            )}
        </div>
    );
};