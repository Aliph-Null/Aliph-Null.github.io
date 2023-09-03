const en_text = [
    "I am a driven and passionate student who has turned my laptop into a powerful platform for creating innovative programming projects. With a diverse skill set in web programming, game development, and beyond, I am constantly exploring new avenues of technology and pushing the boundaries of what's possible. Whether it's crafting complex algorithms or collaborating with a team to bring a vision to life, I am always eager to take on new challenges and exceed expectations. Join me on my journey as I continue to grow and evolve as a programmer and creative problem-solver.",
    "\"Create from nothingness\" - a powerful statement that embodies the true essence of innovation and creativity. It's a philosophy that speaks to the boundless potential of the human mind, and the limitless possibilities that arise when we let our imaginations run wild. Whether it's a work of art, a technological breakthrough, or a new way of looking at the world around us, the act of creation begins with a single idea, a spark that ignites the fire of innovation. So let us embrace the power of nothingness, and use it as a canvas upon which to paint our dreams and bring them to life."
];

const ro_text = [
    "Sunt un student dedicat și pasionat care și-a transformat laptopul într-o platformă puternică pentru crearea de proiecte de programare inovatoare. Cu un set divers de competențe în programarea web, dezvoltarea de jocuri și în alte domenii, explorez constant noi tehnologii și depășesc limitele a ceea ce este posibil. Fie că este vorba de crearea de algoritmi complexi sau de colaborarea cu o echipă pentru a da viață unei viziuni, sunt întotdeauna dornic să îmbrățișez noi provocări și să depășesc așteptările. Alătură-te mie în călătoria mea pe măsură ce continuu să cresc și să evoluez ca programator și rezolvator creativ de probleme.",
    "\"Create from nothingness\" - o afirmație puternică care încapsulează adevărata esență a inovației și creativității. Este o filozofie care vorbește despre potențialul nelimitat al minții umane și despre posibilitățile infinite care apar atunci când lăsăm imaginația să zburde. Fie că este vorba de o operă de artă, o descoperire tehnologică sau o nouă perspectivă asupra lumii din jurul nostru, actul de creație începe cu o singură idee, o scânteie care aprinde flacăra inovației. Așadar, să abordăm puterea nimicului și să o folosim ca pe o pânză pe care să ne pictăm visele și să le dăm viață."
];

const ru_text = [
    "Я - мотивированный и энергичный студент, который превратил свой ноутбук в мощную платформу для создания инновационных проектов по программированию. Обладая разнообразным набором навыков веб-программирования, разработки игр и других областей, я постоянно исследую новые технологии и расширяю границы того, что возможно. Будь то создание сложных алгоритмов или совместная работа c командой для воплощения идеи в жизнь, я всегда готов браться за новые вызовы и превзойти ожидания. Присоединяйтесь ко мне в моем путешествии, по мере того, как я продолжаю расти и развиваться как программист и творческий решатель проблем.",
    "\"Create from nothingness\" - Это мощное заявление, которое олицетворяет истинную сущность инноваций и креативности. Это философия, которая говорит о безграничном потенциале человеческого разума и о бесконечных возможностях, которые возникают, когда мы позволяем нашим воображениям бежать на волю. Будь то произведение искусства, технологический прорыв или новый способ взгляда на мир вокруг нас, акт творчества начинается с одной идеи, искры, которая зажигает огонь инноваций. Итак, давайте об embrace the power of nothingness, и использовать его как холст, на котором мы можем нарисовать наши мечты и воплотить их в жизнь."
];

const browserLanguage = navigator.language || navigator.userLanguage;
console.log("Display language: " + browserLanguage);

// Create an object with language properties
var languages = {
    "en": en_text,
    "ro": ro_text,
    "ru": ru_text
};
  
function ImplementText(language){
    //by default chose eng_text
    var current_array = en_text;
    
    if (languages[language]) {
        current_array = languages[language];
    }

    for(let i = 0; i < current_array.length; i++){
        const text_id = "text" + i;
        document.getElementById(text_id).innerHTML = current_array[i];
    }
}

//ImplementText(browserLanguage);
ImplementText("en");