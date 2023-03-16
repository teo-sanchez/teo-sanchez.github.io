var Ae=Object.defineProperty;var K=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable;var J=(t,s,n)=>s in t?Ae(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,E=(t,s)=>{for(var n in s||(s={}))Ie.call(s,n)&&J(t,n,s[n]);if(K)for(var n of K(s))je.call(s,n)&&J(t,n,s[n]);return t};import{t as G,f as F,i as L,s as N,a as z,b as $e,c as Q,m as Te,d as De,e as l,w as Be,g as q,h as Re,j as W,k as H,l as Ue,n as Oe,o as Y,p as Z,q as Ve,r as Ke,u as _,v as M,x as X,y as Je,z as ee,A as Ge,B as Fe,C as te}from"./vendor.e33fb0e0.js";const Qe=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};Qe();const We={width:0,height:0,min:0,max:255,bw:!1};async function se(t={},s){const{width:n,height:i,min:r,max:a,bw:d}=E(E({},We),t),u=G(()=>{let o=F(s);if(n>0&&i>0)o=L.resizeBilinear(o,[n,i]);else if(n>0&&i===0){const v=s.height*n/s.width;o=L.resizeBilinear(o,[n,v])}else if(n===0&&i>0){const v=s.width*i/s.height;o=L.resizeBilinear(o,[v,i])}if(d){const v=N(.2989),ke=N(.587),Se=N(.114),Ce=z(o,[0,0,0],[o.shape[0],o.shape[1],1]),Ee=z(o,[0,0,1],[o.shape[0],o.shape[1],1]),ze=z(o,[0,0,2],[o.shape[0],o.shape[1],1]);o=$e(Q(Q(Ce.mul(v),Ee.mul(ke)),ze.mul(Se)),[2])}return o=Te(o,(a-r)/255),o=De(o,r),o}),P=await u.array();return u.dispose(),P}function He(t={},s){return s!==void 0?se(t,s):n=>se(t,n)}const Ye={author:{name:"T\xE9o Sanchez"},dashboards:{title:"TP: apprentissage automatique"}},Ze={name:"Introduction",text:{title:"",content:"Voir dans le fichier index.js"},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},Xe={name:"Histoire",text:{title:"",content:"Voir dans le fichier index.js"},timeline:"Chronologie de l'intelligence artificielle",video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},et={name:"Donn\xE9es",text:{title:"",content:"Voir dans le fichier index.js"},webcam:"Cam\xE9ra",input_files:"Charger des images",label:"Aposer une \xE9tiquette",button:"Enregistrer des images \xE9tiquet\xE9es de la cam\xE9ra",message_button:"Maintenir pour capturer",browser:{train:"Donn\xE9es d'entra\xEEnement",test:"Donn\xE9es de test"},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},tt={name:"Attributs",text:{title:"",content:"Voir dans le fichier index.js"},feature_title:"Les 1024 attributs calcul\xE9s par le r\xE9seau de neurone pr\xE9-entra\xEEn\xE9 MobileNetV1",title:"Extracteur d'attributs",video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},st={name:"Entra\xEEnement",text:{title:"",content:"Voir dans le fichier index.js"},knn:{text:{title:"",content:"Voir dans le fichier index.js"},progress:"Progression de l'entra\xEEnement",params:"Param\xE8tres du classifieur kNN"},mlp:{text:{title:"",content:"Voir dans le fichier index.js"},progress:"Progression de l'entra\xEEnement",params:"Couches cach\xE9es du perceptron",plot:"Courbe d'apprentissage"},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},nt={name:"\xC9valuation",text:{title:"",content:"Voir dans le fichier index.js"},knn:{button:{title:"",content:"Mettre \xE0 jour les r\xE9sulats du kNN"},matrix:{train:"Matrice de corr\xE9lation du kNN sur l'ensemble d'entra\xEEnement",test:"Matrice de corr\xE9lation du kNN sur l'ensemble de test"}},mlp:{button:{title:"",content:"Mettre \xE0 jour les r\xE9sulats du MLP"},matrix:{train:"Matrice de corr\xE9lation du MLP sur l'ensemble d'entra\xEEnement",test:"Matrice de corr\xE9lation du MLP sur l'ensemble de test"}},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},it={name:"D\xE9ploiement",text:{title:"",content:"Voir dans le fichier index.js"},display:"Image s\xE9lectionn\xE9e",toggle:{title:"Utiliser",content:"Activer"},mlp:{plot:"Pr\xE9dictions du MLP"},knn:{plot:"Pr\xE9dictions du kNN"},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},rt={name:"Attaque adversaire",text:{title:"",content:"Voir dans le fichier index.js"},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},at={name:"Cr\xE9dits",text:{title:"",content:"Voir dans le fichier index.js"}},ot={name:"Aider la recherche!",text:{title:"",content:"Voir dans le fichier index.js"},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}};var e={misc:Ye,introduction:Ze,history:Xe,data:et,embedding:tt,training:st,evaluation:nt,deployment:it,adversarial:rt,credits:at,research:ot};const k=224;function b(t,s,n,i){return`<iframe src='${t}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' 
        width='${n}' height='${i}' 
        frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen 
        title='${s}'></iframe>`}const lt=l(b(e.introduction.video.url,e.introduction.video.title,e.introduction.video.width,e.introduction.video.height));lt.title=e.introduction.video.title;const ne=l(`
<h4>Bienvenue dans ce premier TP sur l'intelligence artificielle et l'apprentissage machine.</h4>
Dans ce TP, vous allez d\xE9couvrir plusieurs aspects de l'intelligence artificielle (IA): <BR>
<ul>
  <li> Nous d\xE9couvrirons d'abord son histoire r\xE9cente et mouvement\xE9e, des ann\xE9es 1940 jusqu'\xE0 nos jours. Le d\xE9velopement de l'IA a toujours suscit\xE9 beaucoup de promesses et de fantasmes. Au travers de cette histoire, nous essayerons de comprendre quels ont \xE9t\xE9 les accomplissements de l'IA. </li>
  <li> Dans un second temps, nous explorerons un domaine tr\xE8s repr\xE9sent\xE9 de l'intelligence artificielle: l'<b>apprentissage automatique</b> (Machine Learning en anglais). Pour cela, vous ferez apprendre un algorithme \xE0 cat\xE9goriser des images.
  Vous aurez le choix entre deux bases de donn\xE9es associ\xE9es aux th\xE9matiques de <b>la reconnaissance faciale</b> et de <b>la conduite autonome</b>. 
  <li> Enfin, nous vous invitons \xE0 participer \xE0 <b>une \xE9tude de recherche sociologique</b> en r\xE9pondant \xE0 questionnaire annonyme.
  Vos r\xE9ponses aideront la recherche publique \xE0 mieux comprendre ce que vous avez appris au travers de ce TP et ce que vous pensez de l'IA.
  </li>
</ul>
<BR>

Le TP est divis\xE9 en plusieurs activit\xE9s, accessibles gr\xE2ce aux diff\xE9rents onglets visibles en haut de le page.
Des consignes \xE9crite et vid\xE9o expliquant le d\xE9roul\xE9 de l'activit\xE9 sera disponible dans chaque page.
Vous aurez \xE9galement acc\xE8s \xE0 des outils interactifs pour entra\xEEner des algorithmes d'apprentissage machine.
Les questions associ\xE9es \xE0 ce TP sont disponibles <a href="https://www.lisn.upsaclay.fr/~tsanchez/TP_IA/ennonce_TP_IA.pdf" target="_blank">\xE0 cette addresse</a>, ou sera distribu\xE9 par votre enseignant.
<BR>
<BR>
Il ne vous reste plus  qu'\xE0 commencer la premi\xE8re activit\xE9 sur l'histoire de l'intelligence artificielle en cliquant sur l'activit\xE9 "Histoire". <br><br>
Bon travail !
`);ne.title=e.introduction.text.title;const ut=l(b(e.history.video.url,e.history.video.title,e.history.video.width,e.history.video.height));ut.title=e.history.video.title;const ie=l(`
<h4> Avant d'entrer dans la pratique, nous allons d\xE9couvrir l'histoire du d\xE9velopement de l'intelligence artificielle (IA).</h4>
Cette histoire scientifique est marqu\xE9e par des changements de <b>paradigmes</b> c'est \xE0 dire de mani\xE8re de voir les choses.<BR>
Les deux grands paradigmes de l'IA qui se sont succ\xE9d\xE9s peuvent \xEAtre regroup\xE9s en deux familles: l'approche <b>connexioniste</b> et l'approche <b>symbolique</b>.
Ces deux approches ont des points de vues diff\xE9rents sur la fa\xE7on dont l'esprit humain fonctionne et devrait \xEAtre simul\xE9 avec des algorithmes:
<ul>
<li> L'approche <b>connexioniste</b> pense que la cognition humaine (ou animale) \xE9merge de l'interconnexion entre les neurones lorsqu'ils sont organis\xE9s en r\xE9seau.
Pour simuler des comportements cognitifs intelligents, les chercheurs connexionnistes cherchent \xE0 comprendre et mod\xE9liser les neurones biologiques et de simuler leurs comportements dans des machines.
<li> L'approche <b>symbolique</b> consid\xE8re que l'esprit n'acc\xE8de pas directement au monde mais par l'interm\xE9diaires de repr\xE9sentations.
Pour cette \xE9cole de pens\xE9e, l'enjeux est de trouver les repr\xE9sentations appropri\xE9s de l'esprit humain, et d'introduire explicitement ces repr\xE9sentations (ou symboles) dans les ordinateurs afin de pouvoir y conduire des raisonnements.
</ul>

C'est par l'approche connexionniste que le domaine de recherche a d\xE9but\xE9 entre les ann\xE9es  40 et 60, avant m\xEAme queles ordinateurs n'existent.
Le chercheur <b>Frank Rosenblatt construit alors le Perceptron</b>, un r\xE9seau de neurone artificiel simul\xE9 avec des circuits \xE9lectriques analogiques.
<br><br>
L'approche symbolique critiquera le manque de rigueur math\xE9matique des travaux de Rosenblatt.
Cette approche d\xE9bute en 1956 avec <b>la conf\xE9rence de Darmouth</b>.
Elle est men\xE9 par une poign\xE9e de chercheurs am\xE9ricains: les math\xE9maticiens Marvin Minsky et John McCarthy et les psychologues Allen Newell et Herbert Simon.
C'est lors de cette conf\xE9rence que sera choisi le terme intelligence artificielle pour d\xE9signer le domaine.
Ce terme, un peu pr\xE9somptueux et regroupant des disciplines diverses, sera souvent accompagn\xE9 de pr\xE9dictions irr\xE9alistes de la part des m\xE9dias mais aussi des chercheurs!
Ces pr\xE9visions attireront les investissements, venant surtout des corps de l'arm\xE9e am\xE9ricaine. Ces derniers esp\xE8rent des avanc\xE9es strat\xE9giques pour gagner la guerre froide: la traduction automatique du russe ou des armes contr\xF4l\xE9s \xE0 distance, par commandes vocales.
Bien loin de cela, les applications de l'IA symbolique se limitaient \xE0 des probl\xE8mes simples, o\xF9 l'on peut facilement y projetter des r\xE8gles de logique: la g\xE9om\xE9trie ou des jeux de plateaux commes les \xE9checs ou les dames.
Ces d\xE9convenues provoqueront l'arr\xEAt des financements \xE0 deux reprises et sur de longues p\xE9riodes (environ 10 ans). On parle d'<b>hivers de l'intelligence artificiel</b>.
<br><br>
L'approche connexioniste a finalement repris le dessus dans les ann\xE9es 2000 et 2010 lorsque les performances des r\xE9seaux de neurones artificiels ont bondi.
De nos jour, un r\xE9seau de neurone apprends \xE0 r\xE9aliser une t\xE2che (classification, r\xE9gression ou g\xE9n\xE9ration) en apprenant sur de grandes bases de donn\xE9es brutes (de l'image, de l'audio, du texte).
Les neurones artificiels sont organis\xE9s en couches interconnect\xE9s, sur plusieurs niveaux de profondeur: on parle d'apprentissage profond ou Deep Learning.
Simuler de tels architectures n\xE9cessite des calculs parall\xE8les avec des cartes graphiques (GPU), les m\xEAmes utilis\xE9s par les gamers.
Les chercheurs pionniers du domaines sont le fran\xE7ais Yann Lecun et les canadiens Joshua Bengio et Geoffrey Hinton.
Leur approche a bouscul\xE9 de nombreux domaines o\xF9 les scientifiques tentaient de mod\xE9liser explicitement des ph\xE9nom\xE8nes.
Avec le Deep Learning, ces ph\xE9nom\xE8nes peuvent \xEAtre mod\xE9lis\xE9s si l'on dispose de la bonne architecture, des bons param\xE8tres, de suffisemment de donn\xE9es et de puissance de calcul.
Une fois le ph\xE9nom\xE8ne mod\xE9lis\xE9, on peut r\xE9aliser des <b>pr\xE9dictions</b> sur des donn\xE9es nouvelles.
<br><br>
De nos jours, les algorithmes d'apprentissage machine d\xE9ploy\xE9s \xE0 grande \xE9chelle sur internet, les r\xE9seaux sociaux et dans les institutions.
Les entreprises priv\xE9es d\xE9tiennent la majorit\xE9 de ces algorithmes massivement d\xE9ploy\xE9s.
Ces algorithmes peuvent faire des pr\xE9dictions sur de nombreux aspects de nos vies: acc\xE8s \xE0 une \xE9cole, prix d'une assurance, publicit\xE9 cibl\xE9e et la reconnaissance faciale en sont quelques exemples. 
Ils apprennent \xE0 partir de masse de donn\xE9es toujours plus volumineuse et leur architecture m\xEAme (en r\xE9seau) rends leurs pr\xE9dictions difficile \xE0 interpr\xE9ter.
De plus en plus de voix s'\xE9l\xE8vent pour demander plus de transparence et de responsabilit\xE9 quant au d\xE9ploiement de tels technologies.
<br><br>
<b>Exercice:</b> Continuer votre enqu\xEAte sur l'histoire de l'IA en utilisant la chronologie ci-dessous.
En cliquant sur un \xE9v\xE8nement, vous acc\xE8derez \xE0 une br\xE8ve description et des illustrations.
<br><br>

Si vous voulez en apprendre plus, nous vous recommandons l'excellent article <i>La revenche des neurones</i> des sociologues Dominique Cardon, Jean-Philippe Cointet et Antoine Mazi\xE8res.
Cette activit\xE9 est largement inspir\xE9 de leurs travaux.
`);ie.title=e.history.text.title;const re=l(`
<iframe width="100%" height="600" src="https://time.graphics/fr/embed?v=1&id=599729" frameborder="0" allowfullscreen></iframe>
<div><a  style="font-size: 12px; text-decoration: none;" title="Powered by Time.Graphics" href="https://time.graphics">Powered by Time.Graphics</a></div>
`);re.title=e.history.timeline;const ct=l(b(e.data.video.url,e.data.video.title,e.data.video.width,e.data.video.height));ct.title=e.data.video.title;const ae=l(`
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
<img class="center" size="10%" src="https://www.lisn.upsaclay.fr/~tsanchez/TP_IA/assets/images/diagramme_cycle.png" >
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
`);ae.title=e.data.text.title;const y=Be();y.title=e.data.webcam;const A=q("miniMASK");A.title="Donn\xE9es de ports de masques chirurgicaux";const I=q("miniROAD");I.title="Donn\xE9es de circulation routi\xE8re";const h=Re("localStorage"),c=W("training-set-mlp-vs-knn",h),m=W("test-set-mlp-vs-knn",h),x=H(c);x.title=e.data.browser.train;const w=H(m);w.title=e.data.browser.test;const dt=l(b(e.embedding.video.url,e.embedding.video.title,e.embedding.video.width,e.embedding.video.height));dt.title=e.embedding.video.title;const oe=l(`
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
<img class="center" src="https://www.lisn.upsaclay.fr/~tsanchez/TP_IA/assets/images/RGB_layers.png" >
<BR>
Puisque nos images sont dans un format carr\xE9 de 224 pixels par 224 pixels, on se retrouve avec 224x224x3 = 150528 valeurs que notre algorithme d'apprentissage doit tra\xEEter.
Les r\xE9seaux de neurones \xE0 architecture profonde sont capable d'apprendre sur de tels images, mais l'entra\xEEnement requiert beaucoup d'images, de temps de calcul et du mat\xE9riel sp\xE9cialis\xE9 (GPU).
<BR>
<BR>
Puisque nos deux algorithmes d'apprentissage vont \xEAtre entra\xEEn\xE9s dans le navigateur, on se doit de simplifier le probl\xE8me pour \xE9viter de longs calculs. On cherche donc \xE0 extraire des <b>attributs</b> pertinents de l'image.
Par exemple, on pourrait prendre comme attributs les intensit\xE9s moyennes sur les canaux RGB. On passerait de 150528 valeurs (l'image brute) \xE0 3 valeurs seulement: le taux de rouge, de vert et de bleu.
C'est une grande simplification et un mod\xE8le pourrait facilement distinguer des objets de couleurs diff\xE9rentes avec tr\xE8s peu de temps d'entra\xEEnement.
Cependant, on perdrait l'information sur les formes ou les d\xE9tails de l'image qui ne pourrait pas \xEAtre appris par nos algorithmes d'apprentissage.
<BR>
<BR>
Au lieu de cela, nous allons utiliser un r\xE9seau de neurones pr\xE9-entra\xEEn\xE9 pour extraire des attributs de l'image.
On utilise le r\xE9seau MobileNetV1, qui est un r\xE9seau de neurones convolutionnel qui a \xE9t\xE9 entra\xEEn\xE9 sur 1000 cat\xE9gories diff\xE9rentes.
Ce r\xE9seau prends en entr\xE9e une image brute et donne en sortie un vecteur de 1024 attributs abstraits qui ont \xE9t\xE9 pr\xE9alablement appris comme \xE9tant pertinent pour d\xE9crire une image.
On appelle ce processus le <b>plongement</b> (embedding en anglais) et nous permet de simplifier des donn\xE9es d'images complexes (150528) en un vecteurs uni-dimensionnel de taille 1024.
Cependant, le "plongement" rend d\xE9j\xE0 l'entra\xEEnement de nos algorithmes d'apprentissage plus opaque et moins interpr\xE9table.
<br>
<br>
<b>Exercice:</b> Inspecter les attributs de vos images en s\xE9lectionnant une image de l'ensemble d'entra\xEEnement ou de test.
Pour vous, ces informations semblent impossible \xE0 interpr\xE9ter mais pour un algorithme de classification, c'est beaucoup plus simple que l'image originale!

`);oe.title=e.embedding.text.title;const S=Ue();S.title=e.embedding.title;const j=l("En attente de la s\xE9lection d'une image...<br><br><br><br><br><br><br><br><br><br>");j.title=e.embedding.feature_title;const pt=x.$selected.filter(t=>t.length===1).map(([t])=>c.get(t)).awaitPromises(),mt=w.$selected.filter(t=>t.length===1).map(([t])=>m.get(t)).awaitPromises(),bt=pt.merge(mt);bt.subscribe(t=>{var n=t.x[0].map(function(i){return i=i.toFixed(2),i});j.$value.set('<p style="font-size:10px;">'.concat(n.join(", "),"</p>"))});async function ht(t){const s=new Image;return new Promise(n=>{s.addEventListener("load",async()=>{const i=G(()=>{const u=Fe(F(s),N(255));return[L.resizeBilinear(u,[k,k]),L.resizeBilinear(u,[80,80])]}),r=new ImageData(await te(i[0]),k,k),a=document.createElement("canvas");await te(i[1],a);const d=a.toDataURL("image/jpeg");i[0].dispose(),i[1].dispose(),n([r,d])}),s.src=t})}async function C(t,s){s=="train"?await c.clear():await m.clear();const n=Array.from(Array(10),(d,u)=>[`https://www.lisn.upsaclay.fr/~tsanchez/TP_IA/data/${t}/${s}/correct_${s}_${u+1}.jpeg`,"correct"]),i=Array.from(Array(10),(d,u)=>[`https://www.lisn.upsaclay.fr/~tsanchez/TP_IA/data/${t}/${s}/incorrect_${s}_${u+1}.jpeg`,"incorrect"]),r=Array.from(Array(10),(d,u)=>[`https://www.lisn.upsaclay.fr/~tsanchez/TP_IA/data/${t}/${s}/absent_${s}_${u+1}.jpeg`,"absent"]);let a=Promise.resolve();n.concat(i).concat(r).forEach(([d,u])=>{a=a.then(async()=>{const[P,o]=await ht(d),v={type:"image",image:P,y:u,thumbnail:o,x:await S.process(P),raw_features:await He({width:8,height:8,max:1,bw:!0},P)};s=="train"?await c.create(v):await m.create(v)})}),await a}I.$click.subscribe(async()=>{await C("miniROAD","train"),await C("miniROAD","test")});A.$click.subscribe(async()=>{await C("miniMASK","train"),await C("miniMASK","test")});const gt=l(b(e.training.video.url,e.training.video.title,e.training.video.width,e.training.video.height));gt.title=e.training.video.title;const $=q("Entra\xEEner le kNN");$.title="";const T=q("Entra\xEEner le MLP");T.title="";const le=l(`
Nous venons de simplifier notre probl\xE8me de reconnaissance d'image en "plongeant" nos images brutes dans un espace \xE0 1024 dimensions.
<BR>
Il est maintenant temps d'entra\xEEner nos algorithmes d'apprentissage. Nous allons entra\xEEner deux mod\xE8les diff\xE9rents:
<ul>
<li> Un algorithme de <b>k plus proches voisins</b> ou k-Neirest Neighbors (<b>kNN</b>) en anglais.
<li> Un <b> Perceptron multicouche</b> ou Multi-Laters Perceptron (<b>MLP</b>) en anglais.
</ul>
Nous allons expliquer bri\xE8vement comment fonctionne ces deux algorithmes, sans entrer dans le d\xE9tail, puis nous entra\xEEnerons les deux algorithmes sur notre jeu de donn\xE9es.
`);le.title=e.training.text.title;const ue=l(`
L'algorithme des k plus proches voisins est un algorithme de classification qui repose sur un principe simple:
<b>la cat\xE9gorie pr\xE9dite d'un image sera celle des images voisines.</b>
<br>
Pour que la notion de voisinage est un sens, il faut encore que l'on d\xE9finisse <b>une distance</b>.
On choisira la distance Euclidienne sur nos images maintenant repr\xE9sent\xE9es par un vecteur de 1024 valeurs.
La distance Euclidienne entre deux vecteurs u et v est d\xE9finie comme:<br>
<img src="https://www.lisn.upsaclay.fr/~tsanchez/TP_IA/assets/images/euclidean_distance.png">
<br>

Le param\xE8tre <b>k</b> d\xE9fini le nombre d'images voisines \xE9tiquet\xE9es \xE0 prendre en compte pour \xE9tiqueter une nouvelle image.
Par exemple, si k=3, une nouvelle image sera \xE9tiquet\xE9e comme l'\xE9tiquette majoritaire parmi les 3 images \xE9tiquet\xE9es les plus proches selon la distance d.
Pour mieux comprendre, essayez de placer de nouveaux points dans cet espace \xE0 deux dimensions en changeant la valeur de <b>k</b>.
Les points d\xE9j\xE0 pr\xE9sents peuvent \xEAtre assimil\xE9 aux images \xE9tiquet\xE9es de l'ensemble d'entra\xEEnement et chaque couleur correspond \xE0 une \xE9tiquette diff\xE9rente.
<br><br>
<iframe class="center" width="100%" height="500" src="https://www.lisn.upsaclay.fr/~tsanchez/TP_IA/assets/knn/index.html" frameborder="0"></iframe><br>
Cr\xE9dits pour la visualisation int\xE9ractive: St\xE9phanie Stoppel
<br>
<b>Exercice:</b> Entra\xEEner votre kNN sur votre ensemble d'entra\xEEnement, en choisissant k = 1.
`);ue.title=e.training.knn.text.title;const ce=l(`
Le Perceptron multicouche, Multilayers Perceptron en anglais (MLP), est un type de r\xE9seau de neurones artificiels.
Il est l'h\xE9ritier du perceptron de Frank Rosenblatt invent\xE9 1957 qui n'avait qu'une seule couche de neurones.
Observons un sch\xE9ma repr\xE9sentant un neurone artificiel (gauche) et un r\xE9seau de neurones artificiel (droite):
<br>
<br>
<img class="center" size="100%" src="https://www.lisn.upsaclay.fr/~tsanchez/TP_IA/assets/images/perceptron.png" >
<br>

\xC0 gauche, le neurone artificiel a un comportement inspir\xE9 du neurone biologique: 
il re\xE7oit des signaux d'autres neurones. L'intensit\xE9 des signaux entrants est repr\xE9sent\xE9 par une valeur flottante dans l'ordinateur.
Chaque signal d'entr\xE9e du neurone est pond\xE9r\xE9 par <b>un poids not\xE9 w</b>. Ce sont ces poids que notre r\xE9seau de neurones artificiels va chercher \xE0 apprendre.
Ils peuvent \xEAtre <b>positifs ou n\xE9gatifs</b> selon si le signal entrant doit <b>activer ou inhiber</b> le neurone.
<br><br>
Le neurone r\xE9alise ensuite une somme (pond\xE9r\xE9 par les poids) de tous les signaux entrants.
Il renvoie un signal si cette somme pond\xE9r\xE9e est sup\xE9rieur \xE0 un seuil.
En r\xE9alit\xE9, ce n'est pas un seuil parfait mais plut\xF4t un seuil liss\xE9.
Cette fonction qui donne la sortie de la valeur de la somme pond\xE9r\xE9e s'appelle une <b>fonction d'activation</b>.
<br>
<br>
\xC0 droite est repr\xE9sent\xE9 un sch\xE9ma o\xF9 les neurones artificiels sont organis\xE9s en couches.
Un perceptron poss\xE8de une couche d'entr\xE9 (c'est notre vecteur de taille 1024), des couches cach\xE9es et une couche de sortie (ce sont nos trois \xE9tiquettes).
Un perceptron peut avoir un nombre variable de couches cach\xE9es ainsi qu'un nombre variable de neurones par couche cach\xE9e.
<br>
Le perceptron va s'entra\xEEner en prenant un paquet d'images d'entra\xEEnement, pr\xE9dire leurs \xE9tiquettes et changer les poids du r\xE9seau si la pr\xE9diction est fausse.
La taille du paquet d'image est donn\xE9e par le param\xE8tre <b>batchSize</b> tandis que le nombre de fois qu'il va prendre un paquet pour modifier ses poids est donn\xE9 par <b>epochs</b>.
<br>
<br>
Notre perceptron n'a pour le moment qu'une couche cach\xE9e contenant 64 neurones.
<br><br>
<b>Exercice:</b> Changer son architecture pour qu'il ait trois couches cach\xE9es comprenant respectivement 128, 64 et 32 neurones puis
lancer l'entra\xEEnement et observer les courbes de co\xFBt (<b>loss</b>) et de pr\xE9cision (<b>accuracy</b>).
<br><br>
La courbe de co\xFBt (loss) doit d\xE9croitre car elle repr\xE9sente l'erreur qui est minimis\xE9 au fur et \xE0 mesure des it\xE9rations. 
La courbe de pr\xE9cision (accuracy) doit augmenter car elle repr\xE9sente le nombre de bonne r\xE9ponse de votre perceptron.
Cependant, ces courbes sont calcul\xE9s sur l'ensemble d'entra\xEEnement, le m\xEAme avec lequel vous avez entra\xEEn\xE9 le mod\xE8le.
Dans la prochaine activit\xE9, nous allons nous assurer que les deux mod\xE8les (kNN et le MLP) g\xE9n\xE9ralisent bien sur de nouvelles donnn\xE9es en les \xE9valuant sur les donn\xE9es des <b>test</b>.
`);ce.title=e.training.mlp.text.title;const g=Oe({k:1,dataStore:h}).sync("mlp-vs-knn-knn"),de=Y(g);de.title=e.training.knn.params;const pe=Z(g);pe.title=e.training.knn.progress;const f=Ve({layers:[64],epochs:20,dataStore:h}).sync("mlp-vs-knn-mlp"),me=Y(f);me.title=e.training.mlp.params;const be=Z(f);be.title=e.training.mlp.progress;const he=Ke(f,["loss","accuracy"]);he.title=e.training.mlp.plot;$.$click.subscribe(()=>{g.train(c,"features")});T.$click.subscribe(()=>{f.train(c,"features")});const vt=l(b(e.evaluation.video.url,e.evaluation.video.title,e.evaluation.video.width,e.evaluation.video.height));vt.title=e.evaluation.video.title;const ge=l(`
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
`);ge.title=e.evaluation.text.title;const D=_({name:"MLP_train",dataset:c,dataStore:h}),B=_({name:"KNN_train",dataset:c,dataStore:h}),R=_({name:"MLP_test",dataset:m,dataStore:h}),U=_({name:"KNN_test",dataset:m,dataStore:h}),O=q(e.evaluation.knn.button.content);O.title=e.evaluation.knn.button.title;const V=q(e.evaluation.mlp.button.content);V.title=e.evaluation.mlp.button.title;const ve=M(D);ve.title=e.evaluation.mlp.matrix.train;const fe=M(B);fe.title=e.evaluation.knn.matrix.train;const xe=M(R);xe.title=e.evaluation.mlp.matrix.test;const we=M(U);we.title=e.evaluation.knn.matrix.test;O.$click.subscribe(async()=>{g.ready||X(new Error("Le classifieur kNN n'a pas \xE9t\xE9 entra\xEEn\xE9 sur les donn\xE9es d'entra\xEEnement")),await B.clear(),await U.clear(),await B.predict(g,c),await U.predict(g,m)});V.$click.subscribe(async()=>{g.ready||X(new Error("Le classifieur MLP n'a pas \xE9t\xE9 entra\xEEn\xE9 sur les donn\xE9es d'entra\xEEnement")),await D.clear(),await R.clear(),await D.predict(f,c),await R.predict(f,m)});const ft=l(b(e.deployment.video.url,e.deployment.video.title,e.deployment.video.width,e.deployment.video.height));ft.title=e.deployment.video.title;const qe=l(`
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
<b>Exercice:</b> Allez dans les param\xE8tres en cliquant sur l'ic\xF4ne <img size="5%" src="https://www.lisn.upsaclay.fr/~tsanchez/TP_IA/assets/images/settings.png" > puis cliquer sur "Download Model" pour t\xE9l\xE9charger les param\xE8tres du perceptron (MLP) entra\xEEn\xE9.
Vous aurez deux fichiers \xE0 t\xE9l\xE9charger: un fichier .json (comprenant l'architecture du perceptron) et un fichier .bin (contenant les poids des connnexions entre les neurones).
<b>
`);qe.title=e.evaluation.text.title;const xt=y.$images.filter(()=>y.$active.value).map(async t=>S.process(t)).awaitPromises(),wt=x.$selected.filter(t=>t.length===1).map(([t])=>c.get(t)).awaitPromises().map(t=>t.x),qt=w.$selected.filter(t=>t.length===1).map(([t])=>m.get(t)).awaitPromises().map(t=>t.x),ye=qt.merge(wt).merge(xt),yt=y.$images.filter(()=>y.$active.value),Pt=x.$selected.filter(t=>t.length===1).map(([t])=>c.get(t)).awaitPromises().map(t=>t.image),Lt=w.$selected.filter(t=>t.length===1).map(([t])=>m.get(t)).awaitPromises().map(t=>t.image);function Nt(t){var s=new Uint8ClampedArray(t.width*t.height*4);for(let i=0;i<=3;i++)for(let r=0;r<t.width;r++)for(let a=0;a<t.height;a++)s[r*t.width*4+a*4+i]=t.data[r*t.width*4+(t.width-a)*4+i];var n=new ImageData(s,t.width,t.height);return n}const _t=yt.map(async t=>Nt(t)).awaitPromises(),Mt=_t.merge(Pt).merge(Lt),Pe=Je(Mt);Pe.title=e.deployment.display;const kt=ye.map(async t=>f.predict(t)).awaitPromises(),St=ye.map(async t=>g.predict(t)).awaitPromises(),Le=ee(kt);Le.title=e.deployment.mlp.plot;const Ne=ee(St);Ne.title=e.deployment.knn.plot;const Ct=l(b(e.adversarial.video.url,e.adversarial.video.title,e.adversarial.video.width,e.adversarial.video.height));Ct.title=e.adversarial.video.title;const Et=l(`
Attaque adversaire, hacking ... `);Et.title=e.adversarial.text.title;const _e=l(`
Ce travail pratique a \xE9t\xE9 \xE9crit et d\xE9velopp\xE9 par:
<ul>
<li> <a href="https://www.lisn.upsaclay.fr/~tsanchez/">T\xE9o Sanchez</a>, doctorant et enseignant \xE0 l'Universit\xE9 Paris-Saclay. Ses recherches s'int\xE9ressent \xE0 la vulgarisation des algorithmes d'apprentissage au moyen d'outils int\xE9ractifs.
<li> Pablo Sanchez, enseignant de Science de l'Ing\xE9nieur au lyc\xE9e Jean-Baptiste Say.
</ul>

L'application a \xE9t\xE9 r\xE9alis\xE9 avec <a href="https://marcelle.dev/">Marcelle</a>, une bo\xEEte \xE0 outils modulaire et open source pour la programmation d'applications interactives d'apprentissage automatique.
Marcelle a \xE9t\xE9 d\xE9velopp\xE9e par:
<ul>
<li> <a href="https://www.julesfrancoise.com/">Jules Fran\xE7ois</a>e, chercheur CNRS au LISN, Universit\xE9 Paris-Saclay
<li> <a href="https://baptistecaramiaux.com/">Baptiste Cararmiaux</a>, chercheur CNRS \xE0 l'ISIR, Sorbonne Universit\xE9
</ul>
`);_e.title=e.credits.text.title;const zt=l(b(e.research.video.url,e.research.video.title,e.research.video.width,e.research.video.height));zt.title=e.research.video.title;const Me=l(`
Nous vous serions tr\xE8s reconnaissant de r\xE9pondre \xE0 ce questionnaire anonyme<a>.
<br>
<br>
Les r\xE9ponses serviront la recherche publique \xE0 comprendre ce que vous avez appris et ce que vous pensez du domaine de l'intelligence artificielle.
Les donn\xE9es sont anonymes et stock\xE9s sur un serveur \xE0 l'universit\xE9 fran\xE7aise (Universit\xE9 Paris-Saclay). De plus, l'\xE9tude a \xE9t\xE9 approuv\xE9e par un comit\xE9 \xE9thique de recherche en charge de veiller \xE0 la bonne protection, l'utilisation et la confidentialit\xE9 des donn\xE9es collect\xE9es.`);Me.title=e.research.text.title;const p=Ge({title:e.misc.dashboards.title,author:e.misc.author.name});p.page(e.introduction.name).sidebar().use(ne);p.page(e.history.name).sidebar().use("Consignes",ie,"Outils",re);p.page(e.data.name).sidebar().use("Consignes",ae,"Outils",[A,I],[x,w]);p.page(e.embedding.name).sidebar(S).use("Consignes",oe,"Outils",j,[x,w]);p.page(e.training.name).sidebar().use("Consignes",le,"k plus proches voisins (kNN)",ue,[de,$,pe],"Perceptron multicouche (MLP)",ce,[me,T,be],he);p.page(e.evaluation.name).sidebar().use("Consignes",ge,"Outils",[O,V],[fe,ve],[we,xe]);p.page(e.deployment.name).sidebar(y).use("Consignes",qe,"Outils",[x,w],"Pr\xE9dictions",[Pe,Ne,Le]);p.page(e.research.name).sidebar().use(Me);p.page(e.credits.name).use(_e);p.settings.dataStores(h).datasets(c).models(g,f);p.show();
