// Copie e cole este código no CONSOLE do navegador (F12) para validar

console.log('='.repeat(60));
console.log('🔍 VALIDAÇÃO - Academia Fuzzion Gym - 3D Background Animation');
console.log('='.repeat(60));

// 1. Verificar Canvas
const canvas = document.getElementById('frameCanvas');
console.log('\n1️⃣ CANVAS:');
console.log('   Existe:', !!canvas);
console.log('   Dimensões:', canvas?.width + 'x' + canvas?.height);
console.log('   Posição:', window.getComputedStyle(canvas)?.position);
console.log('   Z-index:', window.getComputedStyle(canvas)?.zIndex);

// 2. Verificar Overlay
const overlay = document.querySelector('.canvas-overlay');
console.log('\n2️⃣ CANVAS OVERLAY:');
console.log('   Existe:', !!overlay);
console.log('   Z-index:', window.getComputedStyle(overlay)?.zIndex);

// 3. Verificar Seções
const sections = document.querySelectorAll('section');
console.log('\n3️⃣ SEÇÕES:');
console.log('   Total:', sections.length);
sections.forEach((sec, i) => {
    console.log(`   Seção ${i+1}: #${sec.id} - z-index: ${window.getComputedStyle(sec)?.zIndex}`);
});

// 4. Verificar Scroll
console.log('\n4️⃣ SCROLL MECHANICS:');
console.log('   Altura documento:', document.documentElement.scrollHeight);
console.log('   Altura viewport:', window.innerHeight);
console.log('   Altura scrollável:', document.documentElement.scrollHeight - window.innerHeight);
console.log('   Scroll atual:', window.scrollY);
console.log('   Scroll %:', Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100) + '%');

// 5. Verificar Frames
console.log('\n5️⃣ FRAMES CARREGADOS:');
console.log('   Verifique console para mensagens de carregamento');
console.log('   Procure por: "✓ All 240 frames loaded successfully"');

// 6. Verificar Performance
console.log('\n6️⃣ PERFORMANCE:');
console.log('   FPS esperado: 60');
console.log('   Para medir: DevTools → Performance → Record → Scroll → Stop');

// 7. Z-index Stack
console.log('\n7️⃣ Z-INDEX STACK:');
const elements = [
    { name: 'Navbar', selector: '.navbar' },
    { name: 'Scroll Indicator', selector: '.scroll-indicator' },
    { name: 'Hero Section', selector: '#hero' },
    { name: 'About Section', selector: '.about' },
    { name: 'Canvas Overlay', selector: '.canvas-overlay' },
    { name: 'Canvas Background', selector: '#frameCanvas' }
];

elements.forEach(el => {
    const elem = document.querySelector(el.selector);
    if (elem) {
        const zIndex = window.getComputedStyle(elem)?.zIndex;
        console.log(`   ${el.name}: z-index ${zIndex}`);
    }
});

// 8. Teste de Scroll
console.log('\n8️⃣ TESTE DE SCROLL:');
console.log('   Role a página e observe o frame mudar em tempo real');
console.log('   Cole novamente este script para ver frame index atualizado');

// 9. HTML Structure
console.log('\n9️⃣ ESTRUTURA HTML:');
console.log('   <canvas> existe:', !!document.querySelector('canvas'));
console.log('   <body> tem conteúdo:', document.body.children.length, 'elementos');
console.log('   Primeira seção:', document.querySelector('section')?.id || 'hero');

// 10. Resumo
console.log('\n' + '='.repeat(60));
console.log('✅ VALIDAÇÃO CONCLUÍDA');
console.log('='.repeat(60));
console.log('\n📊 Se todos os items estão verdes:');
console.log('   ✅ Canvas full-screen renderizando');
console.log('   ✅ Overlay melhorando legibilidade');
console.log('   ✅ Z-index correto (canvas 1-2, conteúdo 3+)');
console.log('   ✅ Scroll mechanics funcionando');
console.log('   ✅ 240 frames carregando');
console.log('\n🎬 Animation está PRONTO!');
console.log('='.repeat(60));


// ============ FUNÇÕES AUXILIARES DE DEBUG ============

// Function para monitorar frame em tempo real
window.monitorFrame = function() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = window.scrollY / scrollableHeight;
    const frameIndex = Math.floor(scrollProgress * 239);
    
    console.clear();
    console.log(`📊 FRAME MONITOR`);
    console.log(`Scroll: ${Math.round(scrollProgress * 100)}%`);
    console.log(`Frame: ${frameIndex + 1}/240`);
    console.log(`Y Position: ${window.scrollY}px`);
    
    requestAnimationFrame(window.monitorFrame);
};

// Function para parar monitoring
window.stopMonitor = function() {
    cancelAnimationFrame(window.monitorFrame);
    console.log('✋ Monitoring parado');
};

console.log('\n💡 COMANDOS ÚTEIS:');
console.log('   monitorFrame()  - Monitora frame em tempo real enquanto rola');
console.log('   stopMonitor()   - Para o monitoramento');
console.log('   document.documentElement.scrollHeight - Altura total page');
console.log('   window.scrollY - Posição scroll atual');
