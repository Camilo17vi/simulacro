function checkAnswers() {
    const correctAnswers = {
        q1: 'a',
        q2: 'b',
        q3: 'b',
        q4: 'd',
        q5: 'a',
        q6: 'c',
        q7: 'c',
        q8: 'a',
        q9: 'c',
        q10: 'b',
        q11: 'b',
        q12: 'd',
        q13: 'a',
        q14: 'b',
        q15: 'b',
        q16: 'c',
        q17: 'b',
        q18: 'b',
        q19: 'd',
        q20: 'd',
        q21: 'c',
        q22: 'b',
        q23: 'd',
        q24: 'd',
        q25: 'c',
        q26: 'b',
        q27: 'c',
        q28: 'b',
        q29: 'c',
        q30: 'c',
        q31: 'b',
        q32: 'd',
        q33: 'a',
        q34: 'c',
        q35: 'a',
        q36: 'b',
        q37: 'a',
        q38: 'a',
        q39: 'a',
        q40: 'c',
        q41: 'c',
        q42: 'a',
        q43: 'b',
        q44: 'c',
        q45: 'a',
        q46: 'd',
        q47: 'c',
        q48: 'd',
        q49: 'a',
        q50: 'b',
        q51: 'a',
        q52: 'c',
        q53: 'b',
        q54: 'c',
        q55: 'b',
        q56: 'd',
        q57: 'b',
        q58: 'd',
        q59: 'c',
        q60: 'c',
        q61: 'b',
        q62: 'b',
        q63: 'd',
        q64: 'b',
        q65: 'a',
        q66: 'd',
        q67: 'd',
        q68: 'b',
        q69: 'b',
        q70: 'a',
        q71: 'c',
        q72: 'c',
        q73: 'b',
        q74: 'c',
        q75: 'a',
        q76: 'b',
        q77: 'a',
        q78: 'd',
        q79: 'b',
        q80: 'c',
        q81: 'c',
        q82: 'b',
        q83: 'c',
        q84: 'c',
        q85: 'a',
        q86: 'c',
        q87: 'c',
        q88: 'c',
        q89: 'd',
        q90: 'b',
        q91: 'a',
        q92: 'c',
        q93: 'b',
        q94: 'd',
        q95: 'c',
        q96: 'c',
        q97: 'c',
        q98: 'b',
        q99: 'd',
        q100: 'c',
        q101: 'f',
        q102: 'c',
        q103: 'e',
        q104: 'b',
        q105: 'b',
        q106: 'c',
        q107: 'b',
        q108: 'a',
        q109: 'c',
        q110: 'b',
        q111: 'a',
        q112: 'c',
        q113: 'b',
        q114: 'a',
        q115: 'c',
        q116: 'a',
        q117: 'b',
        q118: 'b',
        q119: 'b',
        q120: 'd',
        q121: 'c',
        q122: 'b',
        q123: 'b',
        q124: 'd',
        q125: 'a'
    };

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    let allCorrect = true;

    for (let key in correctAnswers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        const questionResult = document.createElement('p');

        if (selected) {
            if (selected.value === correctAnswers[key]) {
                questionResult.textContent = `Pregunta ${key[1]}: Correcta`;
                questionResult.classList.add('correct');
            } else {
                questionResult.textContent = `Pregunta ${key[1]}: Incorrecta. La respuesta correcta es ${correctAnswers[key]}.`;
                questionResult.classList.add('incorrect');
                allCorrect = false;
            }
        } else {
            questionResult.textContent = `Pregunta ${key[1]}: No contestada. La respuesta correcta es ${correctAnswers[key]}.`;
            questionResult.classList.add('incorrect');
            allCorrect = false;
        }

        resultsDiv.appendChild(questionResult);
    }

    if (allCorrect) {
        resultsDiv.innerHTML = '<p class="correct">¡Todas las respuestas son correctas!</p>';
    }
}
