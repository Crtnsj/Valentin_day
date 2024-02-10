import { useState } from "react";

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Non",
      "Es-tu sûre ?",
      "Vraiment sûre ?",
      "Réfléchis encore !",
      "Dernière chance !",
      "Vraiment pas ?",
      "Tu pourrais le regretter !",
      "Reconsidère ça !",
      "Es-tu absolument certaine ?",
      "Ça pourrait être une erreur !",
      "Aie un peu de cœur !",
      "Ne sois pas si froide !",
      "Un changement d'envie ?",
      "Ne voudrais-tu pas le reconsidérer ?",
      "C'est ta réponse finale ?",
      "Tu me brises le cœur ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
          <div className="mimi2"></div>
          <div className="text-4xl font-bold my-4">Youhouuuuuuu !!!!🥰🥰🥰</div>
        </>
      ) : (
        <>
          <div className="mimi"></div>
          <h1 className="text-4xl my-4">Est-ce que tu veux être ma Valentine ?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Oui
            </button>
            <button onClick={handleNoClick} className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              {noCount === 0 ? "Non" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
