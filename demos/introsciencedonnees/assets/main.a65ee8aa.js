var re=Object.defineProperty;var T=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var U=(e,s,i)=>s in e?re(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,S=(e,s)=>{for(var i in s||(s={}))oe.call(s,i)&&U(e,i,s[i]);if(T)for(var i of T(s))le.call(s,i)&&U(e,i,s[i]);return e};import{t as B,f as R,i as q,s as N,a as L,c as ue,m as de,b as ce,d as l,w as me,e as w,g as pe,h as he,j as V,k as K,l as ge,n as be,o as ve,p as fe,q as O,r as J,u as we,v as xe,x as ye,y as qe,z as Ne,A as Q}from"./vendor.1c00007a.js";const Pe=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}};Pe();const _e={width:0,height:0,min:0,max:1,bw:!1};async function W(e={},s){const{width:i,height:n,min:a,max:r,bw:u}=S(S({},_e),e),p=B(()=>{let o=R(s);if(i>0&&n>0)o=q.resizeBilinear(o,[i,n]);else if(i>0&&n===0){const y=s.height*i/s.width;o=q.resizeBilinear(o,[i,y])}else if(i===0&&n>0){const y=s.width*n/s.height;o=q.resizeBilinear(o,[y,n])}if(u){N(.2989),N(.587),N(.114);const y=L(o,[0,0,0],[o.shape[0],o.shape[1],1]),ae=L(o,[0,0,1],[o.shape[0],o.shape[1],1]),ne=L(o,[0,0,2],[o.shape[0],o.shape[1],1]);o=ue([y,ae,ne],0)}return o=de(o,(r-a)/255),o=ce(o,a),o}),k=await Array.from(p.dataSync());return p.dispose(),k}function P(e={},s){return s!==void 0?W(e,s):i=>W(e,i)}const Ee={author:{name:"T\xE9o Sanchez"},dashboards:{title:"Les \xE9tapes de l'apprentissage machine"}},ke={name:"Introduction",text:{title:"",content:"Voir dans le fichier index.js"},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},Se={name:"Histoire",text:{title:"",content:"Voir dans le fichier index.js"},timeline:"Chronologie de l'intelligence artificielle",video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},Le={name:"Donn\xE9es",text:{title:"",content:"Voir dans le fichier index.js"},webcam:"Cam\xE9ra",input_files:"Charger des images",label:"Aposer une \xE9tiquette",button:"Enregistrer des images \xE9tiquet\xE9es de la cam\xE9ra",message_button:"Maintenir pour capturer",browser:{train:"Donn\xE9es d'entra\xEEnement",test:"Donn\xE9es de test"},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},$e={name:"Attributs",text:{title:"",content:"Voir dans le fichier index.js"},feature_title:"Les 192 attributs calcul\xE9s",title:"Extracteur d'attributs",video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},ze={name:"Entra\xEEnement",text:{title:"",content:"Voir dans le fichier index.js"},knn:{text:{title:"",content:"Voir dans le fichier index.js"},progress:"Progression de l'entra\xEEnement",params:"Param\xE8tres du classifieur kNN"},mlp:{text:{title:"",content:"Voir dans le fichier index.js"},progress:"Progression de l'entra\xEEnement",params:"Couches cach\xE9es du perceptron",plot:"Courbe d'apprentissage"},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},Me={name:"\xC9valuation",text:{title:"",content:"Voir dans le fichier index.js"},knn:{button:{title:"",content:"Mettre \xE0 jour les r\xE9sulats du kNN"},matrix:{train:"Matrice de corr\xE9lation du kNN sur l'ensemble d'entra\xEEnement",test:"Matrice de corr\xE9lation du kNN sur l'ensemble de test"}},mlp:{button:{title:"",content:"Mettre \xE0 jour les r\xE9sulats du MLP"},matrix:{train:"Matrice de corr\xE9lation du MLP sur l'ensemble d'entra\xEEnement",test:"Matrice de corr\xE9lation du MLP sur l'ensemble de test"}},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},Ie={name:"D\xE9ploiement",text:{title:"",content:"Voir dans le fichier index.js"},display:"Image s\xE9lectionn\xE9e",toggle:{title:"Utiliser",content:"Activer"},mlp:{plot:"Pr\xE9dictions du MLP"},knn:{plot:"Pr\xE9dictions du kNN"},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},je={name:"Attaque adversaire",text:{title:"",content:"Voir dans le fichier index.js"},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},Ce={name:"Cr\xE9dits",text:{title:"",content:"Voir dans le fichier index.js"}},Ae={name:"Aider la recherche!",text:{title:"",content:"Voir dans le fichier index.js"},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}};var t={misc:Ee,introduction:ke,history:Se,data:Le,embedding:$e,training:ze,evaluation:Me,deployment:Ie,adversarial:je,credits:Ce,research:Ae};const _=224;function b(e,s,i,n){return`<iframe src='${e}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' 
        width='${i}' height='${n}' 
        frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen 
        title='${s}'></iframe>`}const De=l(b(t.data.video.url,t.data.video.title,t.data.video.width,t.data.video.height));De.title=t.data.video.title;const c=me();c.title=t.data.webcam;const $=w("Enregistrer l'instance (image+\xE9tiquette) dans l'ensemble d'entra\xEEnement");$.title="";const z=w("Enregistrer l'instance (image+\xE9tiquette) dans l'ensemble de test");z.title="";const E=pe();E.title="\xC9tiquette de l'image";const Te=l(`
<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}
</style>
<h3> Les \xE9tapes de travail de l'apprentissage machine </h3>
Nous allons maintenant entra\xEEner deux algorithmes d'apprentissage automatique diff\xE9rents \xE0 reconna\xEEtre des images. 
Ce processus se d\xE9composer en 5 \xE9tapes sch\xE9matis\xE9es sur la figure ci-dessous.
<br>
<img class="center" size="10%" src="/assets/demos_data/images/diagramme_cycle.png" >
<br>
Des probl\xE8mes peuvent appara\xEEtre lors de l'une des \xE9tapes.
Par exemple, les pr\xE9dictions du r\xE9seau de neurone peuvent \xEAtre syst\xE9matiquement fausses.
On peut alors revenir \xE0 l'une ou l'autre des \xE9tapes pr\xE9c\xE9dentes pour identifier et corriger d'\xE9ventuels probl\xE8mes.
<h3> Collecte des donn\xE9es </h3>
Dans cette activit\xE9, nous allons collecter les donn\xE9es du probl\xE8me. Vous aurez le choix entre deux bases de donn\xE9es:
<ol>
<li> La base de donnn\xE9e <b>miniMASK</b>: elle comporte des images de personnes portant correctement, incorrectement ou pas de masque chirurgical du tout.
Votre algorithme devra arriver \xE0 diff\xE9rencier ces trois cas de figures.
<li> La base de donn\xE9e <b>miniROAD</b>: Elle comporte des images prises depuis une voiture. Votre algorithme devra arriver \xE0 diff\xE9rencier trois cas de figures: la voiture peut continuer \xE0 rouler sans danger, la voiture doit s'arr\xEAter et la voiture fait f\xE2ce \xE0 un danger imminent.
</ol>
<br>
<b>Exercice:</b> Cliquer sur l'un ou l'autre des boutons ci-dessous pour importer votre base de donn\xE9e pour le reste des activit\xE9s du TP. Vous pourrez toujours refaire le TP plus tard avec l'autre base de donn\xE9e.
<h3> Donn\xE9es d'entra\xEEnement / donn\xE9es de test </h3>
Apr\xE8s avoir choisi vos donn\xE9es, vous pouvez apercevoir qu'elles ont \xE9t\xE9 divis\xE9es en deux ensembles:
<ul>
<li> Les <b>donn\xE9es d'entra\xEEnement</b>: ce sont les donn\xE9es que votre algorithme d'apprentissate va voir et sur lesquelles il va apprendre.
Pour cela l'algorithme devra avoir les <i>donn\xE9es d'entr\xE9es</i> (les images) et la <i> v\xE9rit\xE9 terrain </i> c'est \xE0 dire les \xE9tiquettes qui ont \xE9t\xE9 apos\xE9 sur les images (par exemple correct, incorrect ou absent pour les donnn\xE9es de masques chirurgicaux).
<li> Les <b>donn\xE9es de test</b>: Ce sont les donn\xE9es avec lesquelles nous allons \xE9valuer l'algorithme d'apprentissage.
Puisque notre algorithme n'aura jamais vu ces donn\xE9es, on pourra estimer si l'algo est bien entra\xEEn\xE9 lorsqu'il ne fait pas d'erreurs sur les donn\xE9es de test. Pour cela, on va comparer les \xE9tiquettes pr\xE9dites par l'algorithme sur cet ensemble avec les \xE9tiquettes de <i>v\xE9rit\xE9 terrain</i> d\xE9j\xE0 pr\xE9sentes.
</ul>
`);Te.title=t.data.text.title;const M=w("Importer les fruits");M.title="Vous n'avez pas de cam\xE9ra?";const Ue=w("miniROAD");Ue.title="Donn\xE9es de circulation routi\xE8re";const x=he("localStorage"),d=V("training-set",x),m=V("test-set",x),v=K(d);v.title=t.data.browser.train;const f=K(m);f.title=t.data.browser.test;c.$images.filter(()=>$.$pressed.value).map(async e=>({type:"image",image:e,y:E.$value.value,thumbnail:c.$thumbnails.value,x:await P({width:8,height:8,min:0,max:1,bw:!0},e)})).awaitPromises().subscribe(d.create.bind(d));c.$images.filter(()=>z.$pressed.value).map(async e=>({type:"image",image:e,y:E.$value.value,thumbnail:c.$thumbnails.value,x:await P({width:8,height:8,max:1,bw:!0},e)})).awaitPromises().subscribe(m.create.bind(m));const Be=l(b(t.embedding.video.url,t.embedding.video.title,t.embedding.video.width,t.embedding.video.height));Be.title=t.embedding.video.title;const F=l(`
<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
}
</style>
Nous disponsons \xE0 pr\xE9sent d'images brutes, r\xE9partis en deux ensemble: l'ensemble d'<b>entra\xEEnement</b> et de <b>test</b>.
Une images couleur brute peut \xEAtre vu comme l'ensemble de troix tableaux de nombres. Chaque tableau repr\xE9sente un canal de couleur: rouge, vert et bleu.
On parle des canaux RGB (Red, Green, Blue).
Les valeurs de ces tableaux repr\xE9sentent l'intensit\xE9 du pixel pour la couleur concern\xE9e.
L'image finale correspond \xE0 la superposition des troix canaux de couleurs.
Ci-dessous, vous pouvez voir un sch\xE9ma repr\xE9sentant d'une image RGB de 3 par 3 pixels.
<BR>
<img class="center" src="/assets/demos_data/images/RGB_layers.png" >
<BR>
Puisque nos images sont dans un format carr\xE9 de 224 pixels par 224 pixels, on se retrouve avec 224x224x3 = 150528 valeurs que notre algorithme d'apprentissage doit tra\xEEter.
Les r\xE9seaux de neurones \xE0 architecture profonde sont capable d'apprendre sur de tels images, mais l'entra\xEEnement requiert beaucoup d'images, de temps de calcul et du mat\xE9riel sp\xE9cialis\xE9 (GPU).
<BR>
<BR>
On se doit de simplifier le probl\xE8me pour \xE9viter de longs calculs. On cherche donc \xE0 extraire des <b>attributs</b> pertinents de l'image.
On va simplement r\xE9duire la dimension des images \xE0 8x8 pixels. Pour les trois couleurs, cela nous fait 8x8x3 = 192 valeurs.
<BR>
<BR>
<b>Exercice:</b> Inspecter les attributs de vos images en s\xE9lectionnant une image de l'ensemble d'entra\xEEnement ou de test.
Pour vous, ces informations semblent impossible \xE0 interpr\xE9ter mais pour un algorithme de classification, c'est beaucoup plus simple que l'image originale!

`);F.title=t.embedding.text.title;const Re=ge();Re.title=t.embedding.title;const I=l("En attente de la s\xE9lection d'une image...");I.title=t.embedding.feature_title;const Ve=v.$selected.filter(e=>e.length===1).map(([e])=>d.get(e)).awaitPromises(),Ke=f.$selected.filter(e=>e.length===1).map(([e])=>m.get(e)).awaitPromises(),Oe=Ve.merge(Ke);Oe.subscribe(e=>{var i=e.x.map(function(n){return n=n.toFixed(2),n});I.$value.set('<p style="font-size:10px;">'.concat(i.join(", "),"</p>"))});async function Je(e){const s=new Image;return new Promise(i=>{s.addEventListener("load",async()=>{const n=B(()=>{const p=Ne(R(s),N(255));return[q.resizeBilinear(p,[_,_]),q.resizeBilinear(p,[80,80])]}),a=new ImageData(await Q(n[0]),_,_),r=document.createElement("canvas");await Q(n[1],r);const u=r.toDataURL("image/jpeg");n[0].dispose(),n[1].dispose(),i([a,u])}),s.src=e})}async function G(e,s){s=="train"?await d.clear():await m.clear();const i=Array.from(Array(10),(r,u)=>[`/assets/demos_data/${e}/${s}/pomme_${s}_${u+1}.jpg`,"Pomme"]),n=Array.from(Array(10),(r,u)=>[`/assets/demos_data/${e}/${s}/banane_${s}_${u+1}.jpg`,"Banane"]);let a=Promise.resolve();i.concat(n).forEach(([r,u])=>{a=a.then(async()=>{const[p,k]=await Je(r),o={type:"image",image:p,y:u,thumbnail:k,x:await P({width:8,height:8,max:1,bw:!0},p)};s=="train"?await d.create(o):await m.create(o)})}),await a}M.$click.subscribe(async()=>{await G("miniFRUIT","train"),await G("miniFRUIT","test")});const Qe=l(b(t.training.video.url,t.training.video.title,t.training.video.width,t.training.video.height));Qe.title=t.training.video.title;const j=w("Entra\xEEner le kNN");j.title="";const We=l(`
Nous venons de simplifier notre probl\xE8me de reconnaissance d'image en "plongeant" nos images brutes dans un espace \xE0 1024 dimensions.
<BR>
Il est maintenant temps d'entra\xEEner nos algorithmes d'apprentissage. Nous allons entra\xEEner deux mod\xE8les diff\xE9rents:
<ul>
<li> Un algorithme de <b>k plus proches voisins</b> ou k-Neirest Neighbors (<b>kNN</b>) en anglais.
<li> Un <b> Perceptron multicouche</b> ou Multi-Laters Perceptron (<b>MLP</b>) en anglais.
</ul>
Nous allons expliquer bri\xE8vement comment fonctionne ces deux algorithmes, sans entrer dans le d\xE9tail, puis nous entra\xEEnerons les deux algorithmes sur notre jeu de donn\xE9es.
`);We.title=t.training.text.title;const H=l(`
L'algorithme des k plus proches voisins est un algorithme de classification qui repose sur un principe simple:
<b>la cat\xE9gorie pr\xE9dite d'un image sera celle des images voisines.</b>
<br>
Pour que la notion de voisinage est un sens, il faut encore que l'on d\xE9finisse <b>une distance</b>.
On choisira la distance Euclidienne sur nos images maintenant repr\xE9sent\xE9es par un vecteur de 1024 valeurs.
La distance Euclidienne entre deux vecteurs u et v est d\xE9finie comme:<br>
<img src="/assets/demos_data/images/euclidean_distance.png">
<br>

Le param\xE8tre <b>k</b> d\xE9fini le nombre d'images voisines \xE9tiquet\xE9es \xE0 prendre en compte pour \xE9tiqueter une nouvelle image.
Par exemple, si k=3, une nouvelle image sera \xE9tiquet\xE9e comme l'\xE9tiquette majoritaire parmi les 3 images \xE9tiquet\xE9es les plus proches selon la distance d.
Pour mieux comprendre, essayez de placer de nouveaux points dans cet espace \xE0 deux dimensions en changeant la valeur de <b>k</b>.
Les points d\xE9j\xE0 pr\xE9sents peuvent \xEAtre assimil\xE9 aux images \xE9tiquet\xE9es de l'ensemble d'entra\xEEnement et chaque couleur correspond \xE0 une \xE9tiquette diff\xE9rente.
<br><br>
<iframe class="center" width="100%" height="470" src="/assets/demos_data/knn-app/index.html" frameborder="0"></iframe><br>
Cr\xE9dits pour la visualisation int\xE9ractive: St\xE9phanie Stoppel
<br>
<br>
<b>Exercice:</b> Entra\xEEner votre kNN sur votre ensemble d'entra\xEEnement, en choisissant k = 1.
`);H.title=t.training.knn.text.title;const h=be({k:3,dataStore:x}).sync("knn"),Z=ve(h);Z.title=t.training.knn.params;const X=fe(h);X.title=t.training.knn.progress;j.$click.subscribe(()=>{h.train(d,"x")});const Fe=l(b(t.evaluation.video.url,t.evaluation.video.title,t.evaluation.video.width,t.evaluation.video.height));Fe.title=t.evaluation.video.title;const Ge=l(`
\xC0 pr\xE9sent que nos deux mod\xE8les d'apprentissage sont entra\xEEn\xE9s, nous allons \xE9valuer leurs performances sur l'<b>ensemble de tests</b>.
L'ensemble de test contient des images que le mod\xE8le n'a pas encore vu.
<br>
Nous allons utilis\xE9 deux mesures pour \xE9valuer nos mod\xE8les: 
<ul>
<li> La <b>mesure de pr\xE9cision globale</b> (global accuracy), qui se calcule comme le nombre de bonnes pr\xE9dictions sur l'ensemble divis\xE9 par la taille de l'ensemble.
<li> La <b>matrice de confusion</b> qui est un tableau dont les lignes sont les cat\xE9gories r\xE9elle (que doit pr\xE9dire le classifieur) et les colonnes sont les cat\xE9gories estim\xE9es (qu'a effectivement pr\xE9dit le classifieur).
Un classifieur est bon sur l'ensemble test\xE9 si les valeurs de la matrice de corr\xE9lation se concentrent sur la diagonale: les cat\xE9gories que doit pr\xE9dire le classifieur sont effectiement celles pr\xE9dites.
</ul>
<br>
Appliquons ces outils d'\xE9valuation sur nos deux classifieurs (kNN et MLP) et nos deux ensembles (entra\xEEnement et test).
<br>
<br>
<b>Exercice:</b> Mettre \xE0 jours les pr\xE9dictions (pr\xE9cisions et matrices confusions) sur les mod\xE8les et les ensembles.
<br><br>
Pour interpr\xE9ter ces r\xE9sultats, on peut distinguer quatres situations:
<ol>
<li> Le mod\xE8le a une bonne pr\xE9cision sur l'ensemble d'entra\xEEnement et l'ensemble de test.
C'est ce que l'on cherche \xE0 avoir et qui permet de dire que le classifieur sait g\xE9n\xE9raliser ce qu'il a appris sur de nouvelles donn\xE9es.
<li> Le mod\xE8le n'a pas une bonne pr\xE9cision ni sur l'ensemble d'entra\xEEnement ni sur l'ensemble de test.
Dans ce cas, on dit que le mod\xE8le a <b>sous-appris</b> ou qu'il n'a pas appris tout court.
<li> Le mod\xE8le a une bonne pr\xE9cision sur l'ensemble d'entra\xEEnement mais pas l'ensemble de test. 
On dit que le mod\xE8le a <b>sur-appris</b>. Le mod\xE8le sait reconna\xEEtre les images qu'il a d\xE9j\xE0 vu mais ne sait pas g\xE9n\xE9raliser avec de nouvelles images.
<li> Le mod\xE8le a une bonne pr\xE9cision sur l'ensemble de test mais pas l'ensemble d'entra\xEEnement.
Cette situation n'arrive quasiment jamais en pratique.
</ol>
<br>
<b>Exercice:</b> Lequel de vos mod\xE8le (kNN ou MLP) est le plus performant? Est-ce qu'un mod\xE8le a sur-appris ou sous-appris?<br>
<br>
Dans la pratique, il faudrait retourner aux \xE9tapes pr\xE9c\xE9dentes depuis la collecte de donn\xE9es pour essayer d'augmenter la pr\xE9cision de vos mod\xE8les si celle-ci est mauvaise. 
`);Ge.title=t.evaluation.text.title;const C=O({name:"KNN_train",dataset:d,dataStore:x}),A=O({name:"KNN_test",dataset:m,dataStore:x}),D=w(t.evaluation.knn.button.content);D.title=t.evaluation.knn.button.title;const Y=J(C);Y.title=t.evaluation.knn.matrix.train;const ee=J(A);ee.title=t.evaluation.knn.matrix.test;D.$click.subscribe(async()=>{h.ready||we(new Error("Le classifieur kNN n'a pas \xE9t\xE9 entra\xEEn\xE9 sur les donn\xE9es d'entra\xEEnement")),await C.clear(),await A.clear(),await C.predict(h,d),await A.predict(h,m)});const He=l(b(t.deployment.video.url,t.deployment.video.title,t.deployment.video.width,t.deployment.video.height));He.title=t.deployment.video.title;const Ze=l(`
Maintenant que nous avons deux mod\xE8les d'apprentissage entra\xEEn\xE9s, on peut inspecter quelles sont les situatios o\xF9 nos mod\xE8les \xE9chouent.
<br>
<br>
<b>Exercice:</b><br>
Si vous ne disposez pas d'une cam\xE9ra, vous pouvez s\xE9lectionner les images des ensembles d'entra\xEEnement ou de test afin de visualiser leurs pr\xE9dictions.
<br>
Si vous disposez d'une webcam, vous pouvez filmer votre environement pour tester votre algorithme. Vous devez auparavant activer votre cam\xE9ra.
<br>
<br>
Selon l'application que vous avez choisi, les masques chirurgicaux resp. la conduite autonome, on pourrait imaginer que le d\xE9ploiement de nos mod\xE8le d'apprentissage se fasse avec une cam\xE9ra plac\xE9e \xE0 l'entr\xE9e d'une gare resp. dans l'habitacle d'une voiture.
<br>
<br>
<b>Exercice:</b> Imaginez des situations o\xF9 une erreur de votre algorithme pourrait avoir de grandes r\xE9percussions humaines.
<br>
<br>
Les param\xE8tres de votre algorithme entra\xEEn\xE9 peuvent \xEAtre enregistr\xE9.
En particulier, nous sommes int\xE9ress\xE9s d'enregistr\xE9 les param\xE8tres du perceptron multicouche pour la suite de ce TP. <br><br>
<b>Exercice:</b> Allez dans les param\xE8tres en cliquant sur l'ic\xF4ne <img size="5%" src="/assets/demos_data/images/settings.png" > puis cliquer sur "Download Model" pour t\xE9l\xE9charger les param\xE8tres du perceptron (MLP) entra\xEEn\xE9.
Vous aurez deux fichiers \xE0 t\xE9l\xE9charger: un fichier .json (comprenant l'architecture du perceptron) et un fichier .bin (contenant les poids des connnexions entre les neurones).
<b>
`);Ze.title=t.evaluation.text.title;const Xe=c.$images.filter(()=>c.$active.value).map(async e=>P({width:8,height:8,min:0,max:1,bw:!0},e)).awaitPromises(),Ye=v.$selected.filter(e=>e.length===1).map(([e])=>d.get(e)).awaitPromises().map(e=>e.x),et=f.$selected.filter(e=>e.length===1).map(([e])=>m.get(e)).awaitPromises().map(e=>e.x),tt=et.merge(Ye).merge(Xe),st=c.$images.filter(()=>c.$active.value),it=v.$selected.filter(e=>e.length===1).map(([e])=>d.get(e)).awaitPromises().map(e=>e.image),at=f.$selected.filter(e=>e.length===1).map(([e])=>m.get(e)).awaitPromises().map(e=>e.image);function nt(e){var s=new Uint8ClampedArray(e.width*e.height*4);for(let n=0;n<=3;n++)for(let a=0;a<e.width;a++)for(let r=0;r<e.height;r++)s[a*e.width*4+r*4+n]=e.data[a*e.width*4+(e.width-r)*4+n];var i=new ImageData(s,e.width,e.height);return i}const rt=st.map(async e=>nt(e)).awaitPromises(),ot=rt.merge(it).merge(at),te=xe(ot);te.title=t.deployment.display;const lt=tt.map(async e=>h.predict(e)).awaitPromises(),se=ye(lt);se.title=t.deployment.knn.plot;const ut=l(b(t.adversarial.video.url,t.adversarial.video.title,t.adversarial.video.width,t.adversarial.video.height));ut.title=t.adversarial.video.title;const dt=l(`
Attaque adversaire, hacking ... `);dt.title=t.adversarial.text.title;const ie=l(`
Cet application a \xE9t\xE9 r\xE9alis\xE9 par:
<ul>
<li> <a href="https://www.lisn.upsaclay.fr/~tsanchez/">T\xE9o Sanchez</a>, doctorant et enseignant \xE0 l'Universit\xE9 Paris-Saclay. Ses recherches s'int\xE9ressent \xE0 la vulgarisation des algorithmes d'apprentissage au moyen d'outils int\xE9ractifs.
</ul>

L'application a \xE9t\xE9 r\xE9alis\xE9 avec <a href="https://marcelle.dev/">Marcelle</a>, une bo\xEEte \xE0 outils modulaire et open source pour la programmation d'applications interactives d'apprentissage automatique.
Marcelle a \xE9t\xE9 d\xE9velopp\xE9e par:
<ul>
<li> <a href="https://www.julesfrancoise.com/">Jules Fran\xE7ois</a>e, chercheur CNRS au LISN, Universit\xE9 Paris-Saclay
<li> <a href="https://baptistecaramiaux.com/">Baptiste Cararmiaux</a>, chercheur CNRS \xE0 l'ISIR, Sorbonne Universit\xE9
<li> <a href="https://www.lisn.upsaclay.fr/~tsanchez/">T\xE9o Sanchez</a>
</ul>
`);ie.title=t.credits.text.title;const ct=l(b(t.research.video.url,t.research.video.title,t.research.video.width,t.research.video.height));ct.title=t.research.video.title;const mt=l(`
Nous vous serions tr\xE8s reconnaissant de r\xE9pondre \xE0 ce questionnaire anonyme<a>.
<br>
<br>
Les r\xE9ponses serviront la recherche publique \xE0 comprendre ce que vous avez appris et ce que vous pensez du domaine de l'intelligence artificielle.
Les donn\xE9es sont anonymes et stock\xE9s sur un serveur \xE0 l'universit\xE9 fran\xE7aise (Universit\xE9 Paris-Saclay). De plus, l'\xE9tude a \xE9t\xE9 approuv\xE9e par un comit\xE9 \xE9thique de recherche en charge de veiller \xE0 la bonne protection, l'utilisation et la confidentialit\xE9 des donn\xE9es collect\xE9es.`);mt.title=t.research.text.title;const g=qe({title:t.misc.dashboards.title,author:t.misc.author.name});g.page(t.data.name).sidebar(c,E,M).use("Collecter vos donn\xE9es d'entra\xEEnement et de test",[$,z],[v,f]);g.page(t.embedding.name).sidebar().use("Choix des attributs",F,I,[v,f]);g.page(t.training.name).sidebar().use("Entra\xEEner un algorithme de k plus proches voisins (kNN)",H,[Z,j,X]);g.page(t.evaluation.name).sidebar(D).use("\xC9valuer le kNN sur vos donn\xE9es",[Y,ee]);g.page(t.deployment.name).sidebar(c,te).use("Examinez le d\xE9ploirement de votre kNN en temps r\xE9el.",se,[v,f]);g.page(t.credits.name).use(ie);g.settings.dataStores(x).datasets(d,m).models(h);g.show();
