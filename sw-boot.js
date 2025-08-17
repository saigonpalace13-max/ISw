export async function ensureSW(){
  if ('serviceWorker' in navigator) {
    try { await navigator.serviceWorker.register('./sw.js', { scope: './' }); } catch(e){}
  }
}
