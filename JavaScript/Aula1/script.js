
var contador = 1
function saudacoes(msg){
    var msg_amg = "Salve,  'Привет, мир'   é Olá mundo em russo sabia.......ps: não clique no botão novamente"
    var msg_agresivo = "PARE DE CLICAR NESSE BOTÃO AGORA"
    var msg_aviso1 = "Se você não parar eu vou unir forças contra você"
    var msg_aviso2 = "Ok, você quem pediu"
    if(contador < 3){
        alert(msg_amg)
         contador++
        console.log(contador)
    }
    else if(contador < 5){
        alert(msg_agresivo)
        contador++
        console.log(contador)
    }
    else if(contador < 6){
        alert(msg_aviso1)
        contador++
        console.log(contador)
    }
    else{
        alert(msg_aviso2)
        contador++
        console.log(contador)
        carregarBrowserPonies()
    }
    
}
function carregarBrowserPonies() {
    // Cria um elemento script para carregar o arquivo basecfg.js
    var baseConfigScript = document.createElement('script');
    baseConfigScript.src = 'https://panzi.github.io/Browser-Ponies/basecfg.js';
    baseConfigScript.type = 'text/javascript';
    baseConfigScript.id = 'browser-ponies-config';
    baseConfigScript.onload = function() {
        // Após o carregamento do script basecfg.js, carrega o arquivo browserponies.js
        var browserPoniesScript = document.createElement('script');
        browserPoniesScript.src = 'https://panzi.github.io/Browser-Ponies/browserponies.js';
        browserPoniesScript.type = 'text/javascript';
        browserPoniesScript.id = 'browser-ponies-script';
        browserPoniesScript.onload = function() {
            // Após o carregamento de ambos os scripts, executa a configuração dos Browser Ponies
            (function(cfg) {
                BrowserPonies.setBaseUrl(cfg.baseurl);
                BrowserPonies.loadConfig(BrowserPoniesBaseConfig);
                BrowserPonies.loadConfig(cfg);
            })({
                "baseurl": "https://panzi.github.io/Browser-Ponies/",
                "fadeDuration": 500,
                "volume": 1,
                "fps": 60,
                "speed": 30,
                "audioEnabled": false,
                "dontSpeak": true,
                "showFps": false,
                "showLoadProgress": false,
                "speakProbability": 0.1,
                "spawn": {
                    "angel": 4,
                    "bon-bon": 1,
                    "discord": 1,
                    "tank": 1,
                    "twilight sparkle": 1,
                    "winona": 2
                },
                "spawnRandom": 5,
                "autostart": true
            });
        };
        document.head.appendChild(browserPoniesScript);
    };
    document.head.appendChild(baseConfigScript);
}
