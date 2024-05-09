// Структура дерева рішень
class TreeNode {
    constructor(question, choices, childNodes, game = null) {
        this.question = question;
        this.choices = choices;
        this.childNodes = childNodes;
        this.game = game;
    }
}

// Функція для створення дерева рішень
function createDecisionTree() {
    const q50 = new TreeNode("Ігри пригоди для Nintendo Switch", [], [], ["The Legend of Zelda <3", "A Short Hike on Steam"]);
    const q49 = new TreeNode("Ігри страшилки для Nintendo Switch", [], [], ["Inside", "Outlast"]);
    const q48 = new TreeNode("Ігри головоломки для Nintendo Switch", [], [], ["Captain Toad: Treasure Tracker", "Машинаріум"]);
    const q47 = new TreeNode("Ігри шутери для Nintendo Switch", [], [], ["Doom eternal", "Metroid Prime"]);
    const q46 = new TreeNode("Ігри гонки для Nintendo Switch", [], [], ["Mario Cart 8", "GRID Avtosport"]);

    const q45 = new TreeNode("Оберіть жанр гри", ["Racing", "Shooter", "Puzzle", "Horror", "Adventure"], [q46, q47, q48, q49, q50]);

    const q44 = new TreeNode("Рухливі ігри для Nintendo Switch", [], [], ["Just Dance", "Nintendo Switch Sports", "WarioWare Move It!"]);
    const q43 = new TreeNode("Гра для Nintendo Switch з використанням Ring Fit", [], [], ["Ring Fit Adventure"]);
    const q42 = new TreeNode("Чи бажаєте Ви грати з Ring Fit?", ["Так", "Ні"], [q43, q44]);
    const q41 = new TreeNode("Чи бажаєте ви пограти у фізично активну гру?", ["Так", "Ні"], [q42, q45]);

    const q40 = new TreeNode("Ігри пригоди для комп'ютера високої потужності", [], [], ["Hogwarts Legaсy", "The Witcher"]);
    const q39 = new TreeNode("Ігри страшилки для комп'ютера високої потужності", [], [], ["Metro 2033", "GTFO"]);
    const q38 = new TreeNode("Ігри головоломки для комп'ютера високої потужності", [], [], ["LEGO Harry Potter", "LEGO Star Wars"]);
    const q37 = new TreeNode("Ігри шутери для комп'ютера високої потужності", [], [], ["Red Dead Redemption", "S.T.A.L.K.E.R."]);
    const q36 = new TreeNode("Ігри гонки для комп'ютера високої потужності", [], [], ["Forza Horizon 5", "Burnout Paradise Remastered"]);
    const q35 = new TreeNode("Оберіть жанр гри", ["Racing", "Shooter", "Puzzle", "Horror", "Adventure"], [q36, q37, q38, q39, q40]);
    const q34 = new TreeNode("Ігри пригоди для комп'ютера середньої потужності", [], [], ["Minecraft", "Grand Theft Auto"]);
    const q33 = new TreeNode("Ігри страшилки для комп'ютера середньої потужності", [], [], ["The Outlast Trials", "Monster Hunter Rise"]);
    const q32 = new TreeNode("Ігри головоломки для комп'ютера середньої потужності", [], [], ["LEGO Harry Potter", "LEGO Star Wars"]);
    const q31 = new TreeNode("Ігри шутери для комп'ютера середньої потужності", [], [], ["Fortnite", "PUBG"]);
    const q30 = new TreeNode("Ігри гонки для комп'ютера середньої потужності", [], [], ["Car Driving Simulator: Online", "Drive Zone Online"]);
    const q29 = new TreeNode("Оберіть жанр гри", ["Racing", "Shooter", "Puzzle", "Horror", "Adventure"], [q30, q31, q32, q33, q34]);
    const q28 = new TreeNode("Ігри пригоди для комп'ютера низької потужності", [], [], ["Minecraft", "Lethal Company"]);
    const q27 = new TreeNode("Ігри страшилки для комп'ютера низької потужності", [], [], ["Vampire Survivors", "Escape the backrooms"]);
    const q26 = new TreeNode("Ігри головоломки для комп'ютера низької потужності", [], [], ["Масяня під жовтим пресом", "Машинаріум"]);
    const q25 = new TreeNode("Ігри шутери для комп'ютера низької потужності", [], [], ["Doom1", "Half-Life 1"]);
    const q24 = new TreeNode("Ігри гонки для комп'ютера низької потужності", [], [], ["Nail'd", "Colin McRae: DiRT2"]);
    const q23 = new TreeNode("Оберіть жанр гри", ["Racing", "Shooter", "Puzzle", "Horror", "Adventure"], [q24, q25, q26, q27, q28]);
    const q22 = new TreeNode("Оберіть потужність свого комп'ютера", ["Низька", "Середня", "Висока"], [q23, q29, q35]);

    const q21 = new TreeNode("Ігри пригоди для комп'ютера високої потужності", [], [], ["Splatoon 3", "Party Animals"]);
    const q20 = new TreeNode("Ігри страшилки для комп'ютера високої потужності", [], [], ["Phasmophobia", "GTFO"]);
    const q19 = new TreeNode("Ігри головоломки для комп'ютера високої потужності", [], [], ["Шахи", "Покер"]);
    const q18 = new TreeNode("Ігри шутери для комп'ютера високої потужності", [], [], ["Call of Duty", "Prop Hunt"]);
    const q17 = new TreeNode("Ігри гонки для комп'ютера високої потужності", [], [], ["Forza Horizon 5", "Burnout Paradise Remastered"]);
    const q16 = new TreeNode("Оберіть жанр гри", ["Racing", "Shooter", "Puzzle", "Horror", "Adventure"], [q17, q18, q19, q20, q21]);
    const q15 = new TreeNode("Ігри пригоди для комп'ютера середньої потужності", [], [], ["Minecraft", "Grand Theft Auto Online"]);
    const q14 = new TreeNode("Ігри страшилки для комп'ютера середньої потужності", [], [], ["The Outlast Trials", "Ghost Exile"]);
    const q13 = new TreeNode("Ігри головоломки для комп'ютера середньої потужності", [], [], ["Шахи", "Покер"]);
    const q12 = new TreeNode("Ігри шутери для комп'ютера середньої потужності", [], [], ["Fortnite", "PUBG"]);
    const q11 = new TreeNode("Ігри гонки для комп'ютера середньої потужності", [], [], ["Car Driving Simulator: Online", "Drive Zone Online"]);
    const q10 = new TreeNode("Оберіть жанр гри", ["Racing", "Shooter", "Puzzle", "Horror", "Adventure"], [q11, q12, q13, q14, q15]);
    const q9 = new TreeNode("Ігри пригоди для комп'ютера низької потужності", [], [], ["The Jackbox Party Pack 10", "Lethal Company"]);
    const q8 = new TreeNode("Ігри страшилки для комп'ютера низької потужності", [], [], ["Ghost Watchers", "Escape the backrooms"]);
    const q7 = new TreeNode("Ігри головоломки для комп'ютера низької потужності", [], [], ["Шахи", "Покер"]);
    const q6 = new TreeNode("Ігри шутери для комп'ютера низької потужності", [], [], ["Counter-Strike 1.6", "Counter-Strike: Global Offensive"]);
    const q5 = new TreeNode("Ігри гонки для комп'ютера низької потужності", [], [], ["Nail'd", "Colin McRae: DiRT2"]);
    const q4 = new TreeNode("Оберіть жанр гри", ["Racing", "Shooter", "Puzzle", "Horror", "Adventure"], [q5, q6, q7, q8, q9]);
    const q3 = new TreeNode("Оберіть потужність свого комп'ютера", ["Низька", "Середня", "Висока"], [q4, q10, q16]);

    const q2 = new TreeNode("Гра має бути online чи offline?", ["Online", "Offline"], [q3, q22]);

    const q1 = new TreeNode("На чому ви будете грати?", ["Комп'ютер", "Nintendo Switch"], [q2, q41]);
    
    return q1;
}

// Функція для виведення дерева рішень
function printDecisionTree(node) {
    document.getElementById('question').innerText = node.question;
    if (node.game !== null) {
        document.getElementById('choices').innerHTML = "<p>Рекомендовані ігри: " + node.game + "</p>";
    } else {
        let choicesHTML = "<p>Варіанти відповідей:</p>";
        node.choices.forEach((choice, index) => {
            choicesHTML += `<button onclick="chooseOption(${index})">${choice}</button>`;
        });
        document.getElementById('choices').innerHTML = choicesHTML;
    }
}

// Функція для обробки вибору користувача
function chooseOption(choiceIndex) {
    if (choiceIndex === 0 || choiceIndex === 1 || choiceIndex === 2 || choiceIndex === 3 || choiceIndex === 4) {
        globalThis.currentNode = currentNode.childNodes[choiceIndex];
        printDecisionTree(currentNode);
    } else {
        console.log("Невірний індекс вибору.");
    }
}


// Точка входу у програму
function main() {
    globalThis.currentNode = createDecisionTree();
    printDecisionTree(currentNode);
}

// Виклик функції main для початку програми
main();
