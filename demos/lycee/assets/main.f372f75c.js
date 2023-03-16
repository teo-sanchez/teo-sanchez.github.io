var De=Object.defineProperty;var ae=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var re=(t,s,i)=>s in t?De(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,T=(t,s)=>{for(var i in s||(s={}))Re.call(s,i)&&re(t,i,s[i]);if(ae)for(var i of ae(s))$e.call(s,i)&&re(t,i,s[i]);return t};import{t as oe,f as le,i as N,s as M,a as U,b as Be,c as ue,m as Te,d as Ue,e as o,w as Ve,g,h as Oe,j as ce,k as de,l as Ke,n as Fe,o as pe,p as me,q as Je,r as Ge,u as S,v as z,x as he,y as Qe,z as be,A as We,B as He,C as ge}from"./vendor.e33fb0e0.js";const Ye=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}};Ye();const Ze={width:0,height:0,min:0,max:255,bw:!1};async function ve(t={},s){const{width:i,height:n,min:a,max:r,bw:p}=T(T({},Ze),t),m=oe(()=>{let l=le(s);if(i>0&&n>0)l=N.resizeBilinear(l,[i,n]);else if(i>0&&n===0){const b=s.height*i/s.width;l=N.resizeBilinear(l,[i,b])}else if(i===0&&n>0){const b=s.width*n/s.height;l=N.resizeBilinear(l,[b,n])}if(p){const b=M(.2989),_=M(.587),B=M(.114),k=U(l,[0,0,0],[l.shape[0],l.shape[1],1]),Ae=U(l,[0,0,1],[l.shape[0],l.shape[1],1]),Ie=U(l,[0,0,2],[l.shape[0],l.shape[1],1]);l=Be(ue(ue(k.mul(b),Ae.mul(_)),Ie.mul(B)),[2])}return l=Te(l,(r-a)/255),l=Ue(l,a),l}),h=await m.array();return m.dispose(),h}function Xe(t={},s){return s!==void 0?ve(t,s):i=>ve(t,i)}const et={author:{name:"T\xE9o Sanchez"},dashboards:{title:"Apprentissage automatique"}},tt={name:"Introduction",text:{title:"",content:"Voir dans le fichier index.js"},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},st={name:"Histoire",text:{title:"",content:"Voir dans le fichier index.js"},timeline:"Chronologie de l'intelligence artificielle",video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},it={name:"Donn\xE9es",text:{title:"",content:"Voir dans le fichier index.js"},webcam:"Cam\xE9ra",input_files:"Charger des images",label:"Aposer une \xE9tiquette",button:"Enregistrer des images \xE9tiquet\xE9es de la cam\xE9ra",message_button:"Maintenir pour capturer",browser:{train:"Donn\xE9es d'entra\xEEnement",test:"Donn\xE9es de test"},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},nt={name:"Attributs",text:{title:"",content:"Voir dans le fichier index.js"},feature_title:"Les 1024 attributs calcul\xE9s par le r\xE9seau de neurone pr\xE9-entra\xEEn\xE9 MobileNetV1",title:"Extracteur d'attributs",video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},at={name:"Entra\xEEnement",text:{title:"",content:"Voir dans le fichier index.js"},knn:{text:{title:"",content:"Voir dans le fichier index.js"},progress:"Progression de l'entra\xEEnement",params:"Param\xE8tres du classifieur kNN"},mlp:{text:{title:"",content:"Voir dans le fichier index.js"},progress:"Progression de l'entra\xEEnement",params:"Couches cach\xE9es du perceptron",plot:"Courbe d'apprentissage"},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},rt={name:"\xC9valuation",text:{title:"",content:"Voir dans le fichier index.js"},knn:{button:{title:"",content:"Mettre \xE0 jour les r\xE9sulats du kNN"},matrix:{train:"Matrice de corr\xE9lation du kNN sur l'ensemble d'entra\xEEnement",test:"Matrice de corr\xE9lation du kNN sur l'ensemble de test"}},mlp:{button:{title:"",content:"Mettre \xE0 jour les r\xE9sulats du MLP"},matrix:{train:"Matrice de corr\xE9lation du MLP sur l'ensemble d'entra\xEEnement",test:"Matrice de corr\xE9lation du MLP sur l'ensemble de test"}},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},ot={name:"D\xE9ploiement",text:{title:"",content:"Voir dans le fichier index.js"},display:"Image s\xE9lectionn\xE9e",toggle:{title:"Utiliser",content:"Activer"},mlp:{plot:"Pr\xE9dictions du MLP"},knn:{plot:"Pr\xE9dictions du kNN"},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},lt={name:"Attaque adversaire",text:{title:"",content:"Voir dans le fichier index.js"},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}},ut={name:"Cr\xE9dits",text:{title:"",content:"Voir dans le fichier index.js"}},ct={name:"Aider la recherche!",text:{title:"",content:"Voir dans le fichier index.js"},video:{url:"https://www.youtube.com/embed/JMS8WUEnxdQ",width:300,height:300,title:"Explications vid\xE9o"}};var e={misc:et,introduction:tt,history:st,data:it,embedding:nt,training:at,evaluation:rt,deployment:ot,adversarial:lt,credits:ut,research:ct};const E=224;function v(t,s,i,n){return`<iframe src='${t}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' 
        width='${i}' height='${n}' 
        frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen 
        title='${s}'></iframe>`}const dt=o(v(e.introduction.video.url,e.introduction.video.title,e.introduction.video.width,e.introduction.video.height));dt.title=e.introduction.video.title;const fe=o(`
<h4>Bienvenue dans cette activit\xE9 sur l'intelligence artificielle et l'apprentissage machine.</h4>
Vous allez d\xE9couvrir plusieurs aspects de l'intelligence artificielle (IA): <BR>
<ul>
  <li> Nous d\xE9couvrirons d'abord son histoire r\xE9cente et mouvement\xE9e, des ann\xE9es 1940 jusqu'\xE0 nos jours. Le d\xE9veloppement de l'IA a toujours suscit\xE9 beaucoup de promesses et de fantasmes. Avec l'aide d'une chronologie, nous essayerons de comprendre quels ont \xE9t\xE9 les \xE9volutions et les accomplissements de l'IA. </li>
  <li> Dans un second temps, nous explorerons un domaine tr\xE8s repr\xE9sent\xE9 de l'intelligence artificielle: l'<b>apprentissage automatique</b> (Machine Learning en anglais). Pour cela, vous apprendrez \xE0 un algorithme \xE0 cat\xE9goriser des images.
  Vous aurez le choix entre plusieurs bases de donn\xE9es associ\xE9es aux th\xE9matiques de la <b>conduite autonome</b>, de la <b>reconnaissance faciale</b>, de la <b>biologie</b> et du <b>tra\xEEtement des d\xE9chets</b>. 
  <li> Enfin, nous vous invitons \xE0 participer \xE0 <b>une \xE9tude de recherche sociologique</b> en r\xE9pondant \xE0 questionnaire annonyme.
  Vos r\xE9ponses aideront la recherche publique \xE0 mieux comprendre ce que vous avez appris et ce que vous pensez de l'IA.
  </li>
</ul>
<BR>

L'activit\xE9 est divis\xE9 en plusieurs parties, accessibles gr\xE2ce aux diff\xE9rents onglets visibles en haut de le page.
\xC0 chaque page, vous trouverez consignes \xE9crites et des outils interactifs pour entra\xEEner vos algorithmes d'apprentissage automatique. 
Les questions associ\xE9es \xE0 cette activit\xE9 sont disponibles <a href="https://www.lisn.upsaclay.fr/~tsanchez/activite_ia/enonce_ia.pdf" target="_blank">\xE0 cette addresse</a>, ou sera distribu\xE9 par votre enseignant.
<BR>
<BR>
Il ne vous reste plus  qu'\xE0 commencer la premi\xE8re partie sur l'histoire de l'intelligence artificielle en cliquant sur l'activit\xE9 "Histoire". <br><br>
Bon travail !
`);fe.title=e.introduction.text.title;const we=o(`
En cas de probl\xE8mes avec les outils interactifs:
<ul>
<li> Si les pr\xE9dictions ne fonctionnent pas: Avez-vous bien entra\xEEner votre classifieur? Si oui, rafra\xEEchissez la page.
<li> Si les images ne sont pas accessibles lors de l'\xE9valuation ou du d\xE9ploiement: re-t\xE9l\xE9charger les donn\xE9es et r\xE9entra\xEEner votre classifieur.
<li> Vous pouvez \xE9galement vous rendre dans les param\xE8tres en cliquand sur l'ic\xF4ne <img size="5%" src="https://www.lisn.upsaclay.fr/~tsanchez/activite_ia/assets/images/settings.png" > pour supprimer vos donn\xE9es et vos mod\xE8les.
</ul>
`);we.title="";const pt=o(v(e.history.video.url,e.history.video.title,e.history.video.width,e.history.video.height));pt.title=e.history.video.title;const xe=o(`
<style>
.depliable img {
    display: none;
}
a:hover img {
  position:absolute;
  display: inline-block;

    
}
</style>
<h4> Avant d'entrer dans la pratique, nous allons d\xE9couvrir l'histoire du d\xE9veloppement de l'intelligence artificielle (IA).</h4>
Cette histoire scientifique est marqu\xE9e par des changements de <b>paradigmes</b> c'est \xE0 dire de mani\xE8re de voir les choses.<BR>
Les deux grands paradigmes de l'IA qui se sont succ\xE9d\xE9s peuvent \xEAtre regroup\xE9s en deux familles: l'approche <b>connexioniste</b> et l'approche <b>symbolique</b>.
Ces deux approches ont des points de vues diff\xE9rents sur la fa\xE7on dont l'esprit humain fonctionne et devrait \xEAtre simul\xE9 avec des algorithmes:
<ul>
<li> L'approche <b>connexionniste</b> pense que la cognition humaine (ou animale) \xE9merge de l'interconnexion entre les neurones lorsqu'ils sont organis\xE9s en r\xE9seau.
Pour simuler des comportements cognitifs intelligents, les chercheurs connexionnistes cherchent \xE0 comprendre et mod\xE9liser les neurones biologiques et simuler leurs comportements dans des machines.
<li> L'approche <b>symbolique</b> consid\xE8re que l'esprit n'acc\xE8de pas directement au monde mais par l'interm\xE9diaires de repr\xE9sentations.
Pour cette \xE9cole de pens\xE9e, l'enjeu est de trouver les repr\xE9sentations appropri\xE9s de l'esprit humain, et d'introduire explicitement ces repr\xE9sentations (ou symboles) dans les ordinateurs afin de pouvoir y conduire des raisonnements.
</ul>

C'est par l'approche connexionniste que le domaine de recherche a d\xE9but\xE9 entre les ann\xE9es  40 et 60, avant m\xEAme que les ordinateurs n'existent.
Le chercheur am\xE9ricain <a class="depliable" href="#histoire">Frank Rosenblatt<img  width= 200 height=200 src="https://www.lisn.upsaclay.fr/~tsanchez/activite_ia/assets/images/rosenblatt.jpeg"></a> construit le <a href="https://fr.wikipedia.org/wiki/Perceptron" target="_blank">Perceptron</a>, un r\xE9seau de neurone artificiel simul\xE9 avec des circuits \xE9lectriques analogiques.
<br><br>
L'approche symbolique critiquera le manque de rigueur math\xE9matique des travaux de Rosenblatt.
Cette approche d\xE9bute en 1956 avec <a href="https://fr.wikipedia.org/wiki/Conf%C3%A9rence_de_Dartmouth" target="_blank">la conf\xE9rence de Dartmouth</a>.
Elle est men\xE9 par une poign\xE9e de chercheurs am\xE9ricains: les math\xE9maticiens <a class="depliable" href="#histoire">Marvin Minsky<img  width= 200 height=200 src="https://www.lisn.upsaclay.fr/~tsanchez/activite_ia/assets/images/minsky.jpeg"></a>
 et <a class="depliable" href="#histoire">John McCarthy<img  width= 200 height=200 src="https://www.lisn.upsaclay.fr/~tsanchez/activite_ia/assets/images/mccarthy.jpeg"></a> et les psychologues 
 <a class="depliable" href="#histoire">Allen Newell et Herbert Simon<img  width= 360 height=273 src="https://www.lisn.upsaclay.fr/~tsanchez/activite_ia/assets/images/simon.jpeg"></a>.
 C'est lors de cette conf\xE9rence que sera choisi le terme <b>intelligence artificielle</b> pour d\xE9signer le domaine.
Ce terme, un peu pr\xE9somptueux et regroupant des disciplines diverses, sera souvent accompagn\xE9 de pr\xE9dictions irr\xE9alistes de la part des m\xE9dias mais aussi des chercheurs!
Ces pr\xE9visions attireront les investissements, venant surtout des corps de l'arm\xE9e am\xE9ricaine. Ces derniers esp\xE8rent des avanc\xE9es strat\xE9giques pour gagner la guerre froide: la traduction automatique du russe ou des armes contr\xF4l\xE9s \xE0 distance, par commandes vocales.
Bien loin de cela, les applications de l'IA symbolique se limitaient \xE0 des probl\xE8mes simples, o\xF9 l'on peut facilement y projeter des r\xE8gles de logique: la g\xE9om\xE9trie ou des jeux de plateaux (commes les \xE9checs ou les dames).
Ces d\xE9convenues provoqueront l'arr\xEAt des financements \xE0 deux reprises et sur de longues p\xE9riodes (environ 10 ans). On parle d'<b>hivers de l'intelligence artificielle</b>.
<br><br>
L'approche connexionniste a finalement repris le dessus dans les ann\xE9es 2000 et 2010 lorsque les performances des r\xE9seaux de neurones artificiels ont bondi.
De nos jour, un r\xE9seau de neurone apprends \xE0 r\xE9aliser une t\xE2che (classification, r\xE9gression ou g\xE9n\xE9ration) en apprenant sur de grandes bases de donn\xE9es brutes (de l'image, de l'audio, du texte).
Les neurones artificiels sont organis\xE9s en couches interconnect\xE9s, sur plusieurs niveaux de profondeur: on parle d'<a href="https://fr.wikipedia.org/wiki/Apprentissage_profond" target="_blank">apprentissage profond</a> ou Deep Learning.
Simuler de tels architectures n\xE9cessite des calculs parall\xE8les avec des cartes graphiques (GPU), les m\xEAmes utilis\xE9s par les gamers.
Les chercheurs pionniers du domaine sont le fran\xE7ais 
<a class="depliable" href="#histoire">Yann Lecun<img  width= 200 height=200 src="https://www.lisn.upsaclay.fr/~tsanchez/activite_ia/assets/images/lecun.jpeg"></a> et les canadiens 
<a class="depliable" href="#histoire">Yoshua Bengio<img  width= 200 height=200 src="https://www.lisn.upsaclay.fr/~tsanchez/activite_ia/assets/images/bengio.jpeg"></a> et 
<a class="depliable" href="#histoire">Geoffrey Hinton<img  width= 200 height=200 src="https://www.lisn.upsaclay.fr/~tsanchez/activite_ia/assets/images/hinton.jpeg"></a>.
Leur approche a bouscul\xE9 de nombreux domaines o\xF9 les scientifiques tentaient de mod\xE9liser explicitement des ph\xE9nom\xE8nes.
Avec le Deep Learning, ces ph\xE9nom\xE8nes peuvent \xEAtre mod\xE9lis\xE9s si l'on dispose de la bonne architecture, des bons param\xE8tres, de suffisamment de donn\xE9es et de puissance de calcul.
Une fois le ph\xE9nom\xE8ne mod\xE9lis\xE9, on peut r\xE9aliser des <b>pr\xE9dictions</b> sur des donn\xE9es nouvelles.
<br><br>
De nos jours, les algorithmes d'apprentissage automatique sont d\xE9ploy\xE9s \xE0 grande \xE9chelle sur internet, les r\xE9seaux sociaux, dans les institutions et les entreprises.
Certains algorithmes sont massivement d\xE9ploy\xE9s et peuvent faire des pr\xE9dictions sur de nombreux aspects de nos vies: acc\xE8s \xE0 une \xE9cole, prix d'une assurance, publicit\xE9 cibl\xE9e et la reconnaissance faciale. 
Ils apprennent \xE0 partir de masse de donn\xE9es toujours plus volumineuse et leur architecture m\xEAme (en r\xE9seau) rends leurs pr\xE9dictions difficile \xE0 interpr\xE9ter.
De plus en plus de voix s'\xE9l\xE8vent pour demander plus de transparence et de responsabilit\xE9 quant au d\xE9ploiement de ces technologies.
<br><br>
<b>Exercice:</b> Continuer votre enqu\xEAte sur l'histoire de l'IA en utilisant la chronologie ci-dessous.
En cliquant sur un \xE9v\xE8nement, vous acc\xE8derez \xE0 une br\xE8ve description et des illustrations.
<br><br>

Si vous voulez en apprendre plus, nous vous recommandons l'excellent article <a href="https://www.cairn.info/revue-reseaux-2018-5-page-173.htm" target="_blank">La revanche des neurones</a> des sociologues Dominique Cardon, Jean-Philippe Cointet et Antoine Mazi\xE8res.
Cette activit\xE9 est largement inspir\xE9e de leurs travaux.
`);xe.title=e.history.text.title;const qe=o(`
<iframe width="100%" height="600" src="https://time.graphics/fr/embed?v=1&id=599729" frameborder="0" allowfullscreen></iframe>
<div><a  style="font-size: 12px; text-decoration: none;" title="Powered by Time.Graphics" href="https://time.graphics">Powered by Time.Graphics</a></div>
`);qe.title=e.history.timeline;const mt=o(v(e.data.video.url,e.data.video.title,e.data.video.width,e.data.video.height));mt.title=e.data.video.title;const ye=o(`
<style>
.depliable img {
    display: none;
}
a:hover img {
  position:absolute;
  display: inline-block;

    
}
</style>
<h3> Les \xE9tapes de travail de l'apprentissage machine </h3>
L'Intelligence Artificielle est un terme qui a \xE9volu\xE9 au cours de l'histoire et qui regroupe un ensemble tr\xE8s vari\xE9 d'algorithmes.
Dans la suite, on s'int\xE9resse \xE0 des algorithmes d'<b>apprentissage automatique</b>. Plus pr\xE9cisemment, nous allons \xE9tudier deux algorithmes de <b>classification</b> qui s'appliquent sur des <b>images</b>.
<br>
<br>
Le processus pour entra\xEEner des algorithmes d'apprentissage automatique se d\xE9compose en <a class="depliable" href="#donnees">5 \xE9tapes<img  width= 648 height=428 src="https://www.lisn.upsaclay.fr/~tsanchez/activite_ia/assets/images/diagramme_cycle.png"></a>: la collecte des donn\xE9es, l'extraction des attributs, l'entra\xEEnement, l'\xE9valuation et le d\xE9ploiement
Des probl\xE8mes peuvent appara\xEEtre lors de l'une des \xE9tapes.
Par exemple, les pr\xE9dictions du r\xE9seau de neurone peuvent \xEAtre syst\xE9matiquement fausses.
On peut alors revenir \xE0 l'une ou l'autre des \xE9tapes pr\xE9c\xE9dentes pour identifier et corriger d'\xE9ventuels probl\xE8mes.
<h3> Collecte des donn\xE9es </h3>
Dans cette activit\xE9, nous allons collecter les donn\xE9es du probl\xE8me. Vous aurez le choix entre plusieurs bases de donn\xE9es:
<ol>
<li> <b>miniMASK</b> qui comporte des images de personnes portant correctement, incorrectement ou pas de masque chirurgical du tout.
Votre algorithme devra arriver \xE0 diff\xE9rencier ces trois cas de figures.
<li> <b>miniROAD</b> qui comporte des images prises depuis une voiture. Votre algorithme devra diff\xE9rencier trois cas de figures: la voiture peut continuer \xE0 rouler sans danger, la voiture doit s'arr\xEAter et la voiture fait f\xE2ce \xE0 un danger imminent.
<li> <b>miniRETINA</b> qui comporte des images m\xE9dicales de r\xE9tines de l'oeil. Votre algorithme devra diff\xE9rencier les r\xE9tines saines, atteintes de r\xE9tinopathie diab\xE9tique ou atteinte de d\xE9g\xE9n\xE9rescence maculaire li\xE9e \xE0 l'\xE2ge.
<li> <b>miniTRASH</b> qui comporte des images de d\xE9chets que votre algorithme doit trier entre diff\xE9rents bacs: le bac de recyclage (jaune), le bac \xE0 verre (vert) et le d'ordures m\xE9nag\xE8res (noir). 
</ol>
<br>
<b>Exercice:</b> Cliquer sur un seul des boutons ci-contre pour importer votre base de donn\xE9es pour le reste des \xE9tapes de l'activit\xE9. Vous pourrez toujours refaire les \xE9tapes de l'activit\xE9 avec l'autre base de donn\xE9e ult\xE9rieurement.
<h3> Donn\xE9es d'entra\xEEnement / donn\xE9es de test </h3>
Apr\xE8s avoir choisi vos donn\xE9es, vous pouvez apercevoir qu'elles ont \xE9t\xE9 divis\xE9es en deux ensembles:
<ul>
<li> Les <b>donn\xE9es d'entra\xEEnement</b>: ce sont les donn\xE9es que votre algorithme d'apprentissage va voir et sur lesquelles il va apprendre.
Pour cela l'algorithme devra avoir les <i>donn\xE9es d'entr\xE9es</i> (les images) et la <i> v\xE9rit\xE9 terrain </i> c'est \xE0 dire les \xE9tiquettes qui ont \xE9t\xE9 appos\xE9 sur les images (par exemple correct, incorrect ou absent pour les donn\xE9es de masques chirurgicaux).
<li> Les <b>donn\xE9es de test</b>: Ce sont les donn\xE9es avec lesquelles nous allons \xE9valuer l'algorithme d'apprentissage.
Puisque notre algorithme n'aura jamais vu ces donn\xE9es, on pourra estimer si l'algo est bien entra\xEEn\xE9 lorsqu'il ne fait pas d'erreurs sur les donn\xE9es de test. Pour cela, on va comparer les \xE9tiquettes pr\xE9dites par l'algorithme sur cet ensemble avec les \xE9tiquettes de <i>v\xE9rit\xE9 terrain</i> d\xE9j\xE0 pr\xE9sentes.
</ul>
`);ye.title=e.data.text.title;const L=Ve();L.title=e.data.webcam;const Le=g("miniMASK");Le.title="Donn\xE9es de ports de masques chirurgicaux";const ht=g("miniROAD");ht.title="Donn\xE9es de circulation routi\xE8re";const C=g("miniRETINA");C.title="Donn\xE9es m\xE9dicales de r\xE9tinographie";const bt=g("miniTRASH");bt.title="Donn\xE9es de d\xE9chets \xE0 trier";const j=g("miniFRUIT");j.title="Donn\xE9es de pommes et bananes";const f=Oe("localStorage"),u=ce("training-set-mlp-vs-knn",f),d=ce("test-set-mlp-vs-knn",f),x=de(u);x.title=e.data.browser.train;const q=de(d);q.title=e.data.browser.test;const gt=o(v(e.embedding.video.url,e.embedding.video.title,e.embedding.video.width,e.embedding.video.height));gt.title=e.embedding.video.title;const Pe=o(`
<style>
.depliable img {
    display: none;
}
a:hover img {
  position:absolute;
  display: inline-block;

    
}
</style>
Nous disposons \xE0 pr\xE9sent d'images brutes, r\xE9partis en deux ensemble: l'ensemble d'<b>entra\xEEnement</b> et l'ensemble de <b>test</b>.
<br>
<br>
Une images couleur brute peut \xEAtre vue comme l'ensemble de trois tableaux de nombres. Chaque tableau repr\xE9sente un canal de couleur: rouge, vert et bleu.
On parle des canaux RGB (Red, Green, Blue).
Les valeurs de ces tableaux repr\xE9sentent l'intensit\xE9 du pixel pour la couleur concern\xE9e.
L'image finale correspond \xE0 la superposition des trois canaux de couleurs. Voici <a class="depliable" href="#attributs">un sch\xE9ma<img  width= 459 height=441 src="https://www.lisn.upsaclay.fr/~tsanchez/activite_ia/assets/images/RGB_layers.jpeg"></a> repr\xE9sentant la structure d'une image RGB de 3 par 3 pixels.
<BR>
Puisque nos images sont dans un format carr\xE9 de 224 pixels par 224 pixels, on se retrouve avec 224x224x3 = 150528 valeurs que notre algorithme d'apprentissage doit traiter.
Les r\xE9seaux de neurones \xE0 architecture profonde sont capables d'apprendre sur de telles images, mais l'entra\xEEnement requiert beaucoup d'images, de temps de calcul et du mat\xE9riel sp\xE9cialis\xE9 (GPU).
<BR>
<BR>
On se doit de simplifier le probl\xE8me pour \xE9viter de longs calculs puisque nous ne disposons pas d'une grande puissance de calcul dans le navigateur. On cherche donc \xE0 extraire des <b>attributs</b> pertinents de l'image.
Par exemple, on pourrait prendre comme attributs les intensit\xE9s moyennes sur les canaux RGB. On passerait de 150528 valeurs (l'image brute) \xE0 3 valeurs seulement: le taux de rouge, de vert et de bleu.
C'est une grande simplification et un mod\xE8le pourrait facilement distinguer des objets de couleurs diff\xE9rentes avec tr\xE8s peu de temps d'entra\xEEnement.
Cependant, on perdrait l'information sur les formes ou les d\xE9tails de l'image qui ne pourrait pas \xEAtre appris par nos algorithmes d'apprentissage.
<BR>
<BR>
Au lieu de cela, nous allons utiliser un r\xE9seau de neurones pr\xE9-entra\xEEn\xE9 pour extraire des attributs de l'image.
On utilise le r\xE9seau MobileNetV1, qui est un r\xE9seau de neurones convolutionnel qui a \xE9t\xE9 entra\xEEn\xE9 sur 1000 cat\xE9gories diff\xE9rentes.
Ce r\xE9seau prends en entr\xE9e une image brute et donne en sortie un vecteur de 1024 attributs abstraits qui ont \xE9t\xE9 pr\xE9alablement appris comme \xE9tant pertinent pour d\xE9crire une image.
On appelle ce processus le <b>plongement</b> (embedding en anglais) et nous permet de simplifier des donn\xE9es d'images complexes (150528) en un vecteurs unidimensionnel de taille 1024.
Cependant, le "plongement" rend aussi le processus d'apprentissage plus opaque et moins interpr\xE9table.
<br>
<br>
<b>Exercice:</b> Inspecter les attributs de vos images en s\xE9lectionnant une image de l'ensemble d'entra\xEEnement ou de test.
Pour vous, ces informations semblent impossible \xE0 interpr\xE9ter mais pour un algorithme de classification, c'est beaucoup plus simple que l'image originale!

`);Pe.title=e.embedding.text.title;const A=Ke();A.title=e.embedding.title;const V=o("En attente de la s\xE9lection d'une image...<br><br><br><br><br><br><br><br><br><br>");V.title=e.embedding.feature_title;const vt=x.$selected.filter(t=>t.length===1).map(([t])=>u.get(t)).awaitPromises(),ft=q.$selected.filter(t=>t.length===1).map(([t])=>d.get(t)).awaitPromises(),wt=vt.merge(ft);wt.subscribe(t=>{var i=t.x[0].map(function(n){return n=n.toFixed(2),n});V.$value.set('<p style="font-size:10px;">'.concat(i.join(", "),"</p>"))});async function xt(t){const s=new Image;return new Promise(i=>{s.addEventListener("load",async()=>{const n=oe(()=>{const m=He(le(s),M(255));return[N.resizeBilinear(m,[E,E]),N.resizeBilinear(m,[80,80])]}),a=new ImageData(await ge(n[0]),E,E),r=document.createElement("canvas");await ge(n[1],r);const p=r.toDataURL("image/jpeg");n[0].dispose(),n[1].dispose(),i([a,p])}),s.src=t})}async function P(t,s,i,n,a,r){s=="train"?await u.clear():await d.clear();const p=new Array(r.length);for(let h=0;h<r.length;h++)p[h]=Array.from(Array(i),(l,b)=>[`https://www.lisn.upsaclay.fr/~tsanchez/marcelle_datasets/${t}/${s}/${a[h]}_${s}_${b+1}.${n}`,`${r[h]}`]);let m=Promise.resolve();p.forEach(h=>{h.forEach(([l,b])=>{m=m.then(async()=>{const[_,B]=await xt(l),k={type:"image",image:_,y:b,thumbnail:B,x:await A.process(_),raw_features:await Xe({width:3,height:3,max:1,bw:!0},_)};s=="train"?await u.create(k):await d.create(k)})})}),await m}Le.$click.subscribe(async()=>{await P("miniMASK","train","png",10,["Masque","Pas de masque","Masque mal mis"]),await P("miniMASK","test","png",10,["Masque","Pas de masque","Masque mal mis"])});C.$click.subscribe(async()=>{await P("miniRETINA","train",10,"png",["sain","rd","dmla"],["Sain","R\xE9tinopathie Diab\xE9tique","DMLA"]),await P("miniRETINA","test",10,"png",["sain","rd","dmla"],["Sain","R\xE9tinopathie Diab\xE9tique","DMLA"])});j.$click.subscribe(async()=>{await P("miniFRUIT","train",15,"jpg",["pomme","banane"],["Pomme","Banane"]),await P("miniFRUIT","test",15,"jpg",["pomme","banane"],["Pomme","Banane"])});const qt=o(v(e.training.video.url,e.training.video.title,e.training.video.width,e.training.video.height));qt.title=e.training.video.title;const I=g("Entra\xEEner le kNN");I.title="";const D=g("Entra\xEEner le MLP");D.title="";const _e=o(`
Nous venons de simplifier notre probl\xE8me de reconnaissance d'image en "plongeant" nos images brutes dans un espace \xE0 1024 dimensions.
<BR>
Il est maintenant temps d'entra\xEEner nos algorithmes d'apprentissage. Nous allons entra\xEEner deux mod\xE8les diff\xE9rents:
<ul>
<li> Un algorithme de <b>k plus proches voisins</b> ou k-Neirest Neighbors (<b>kNN</b>) en anglais.
<li> Un <b> Perceptron multicouche</b> ou Multi-Laters Perceptron (<b>MLP</b>) en anglais.
</ul>
Nous allons expliquer bri\xE8vement comment fonctionne ces deux algorithmes, sans entrer dans le d\xE9tail, puis nous entra\xEEnerons les deux algorithmes sur notre jeu de donn\xE9es.
`);_e.title=e.training.text.title;const Ne=o(`
<style>
.depliable img {
    display: none;
}
a:hover img {
  position:absolute;
  display: inline-block;

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
    
}
</style>
L'algorithme des k plus proches voisins est un algorithme de classification qui repose sur un principe simple:
<b>la cat\xE9gorie pr\xE9dite d'une image sera celle des images voisines.</b>
<br>
Pour que la notion de voisinage ait un sens, il faut encore que l'on d\xE9finisse <b>une distance</b>.
On choisira la distance Euclidienne sur nos images maintenant repr\xE9sent\xE9es par un vecteur de 1024 valeurs.
Vous connaissez d\xE9j\xE0 <a class="depliable" href="#entrainement">la distance euclidienne en dimension 2<img  width=376 height=42 src="https://www.lisn.upsaclay.fr/~tsanchez/activite_ia/assets/images/euclidean_distance_2.jpeg"></a> entre deux vecteurs u et v. En dimension N=1024, cette formule se g\xE9n\xE9ralise <a class="depliable" href="#entrainement">ainsi<img  width=654 height=91 src="https://www.lisn.upsaclay.fr/~tsanchez/activite_ia/assets/images/euclidean_distance.jpeg"></a>.
<br>
<br>

Le param\xE8tre <b>k</b> d\xE9fini le nombre d'images voisines \xE9tiquet\xE9es \xE0 prendre en compte pour \xE9tiqueter une nouvelle image.
Par exemple, si k=3, une nouvelle image sera \xE9tiquet\xE9e comme l'\xE9tiquette majoritaire parmi les 3 images \xE9tiquet\xE9es les plus proches selon la distance d.
Pour mieux comprendre, essayez de placer de nouveaux points dans cet espace \xE0 deux dimensions en changeant la valeur de <b>k</b>.
Les points d\xE9j\xE0 pr\xE9sents peuvent \xEAtre assimil\xE9s aux images \xE9tiquet\xE9es de l'ensemble d'entra\xEEnement et chaque couleur correspond \xE0 une \xE9tiquette diff\xE9rente.
<br><br>
<iframe class="center" height="480" src="https://www.lisn.upsaclay.fr/~tsanchez/activite_ia/assets/knn/index.html" frameborder="0"></iframe>
Cr\xE9dits pour la visualisation interactive: St\xE9phanie Stoppel
<br><br>

<b>Exercice:</b> Entra\xEEner votre kNN sur votre ensemble d'entra\xEEnement, en choisissant k = 1.
`);Ne.title=e.training.knn.text.title;const ke=o(`
<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>
Le Perceptron multicouche, Multilayers Perceptron en anglais (MLP), est un type de r\xE9seau de neurones artificiels.
Il est l'h\xE9ritier du perceptron de Frank Rosenblatt invent\xE9 1957 qui n'avait qu'une seule couche de neurones.
Observons un sch\xE9ma repr\xE9sentant un neurone artificiel (gauche) et un r\xE9seau de neurones artificiel (droite):
<br>
<br>
<img class="center" src="https://www.lisn.upsaclay.fr/~tsanchez/activite_ia/assets/images/perceptron.png" >
<br>

\xC0 gauche, le neurone artificiel a un comportement inspir\xE9 du neurone biologique: 
il re\xE7oit des signaux d'autres neurones. L'intensit\xE9 des signaux entrants est repr\xE9sent\xE9e par une valeur flottante dans l'ordinateur.
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
La courbe de co\xFBt (loss) en bleu doit d\xE9croitre car elle repr\xE9sente l'erreur qui est minimis\xE9 au fur et \xE0 mesure des it\xE9rations. 
La courbe de pr\xE9cision (accuracy) en bleu doit augmenter car elle repr\xE9sente le nombre de bonne r\xE9ponse de votre perceptron.
\xC0 chaque entra\xEEnement sur un paquet de donn\xE9es d'entra\xEEnement (batch), on calcule \xE9galement un score de co\xFBt et de pr\xE9cision (courbes oranges) sur une fraction des donn\xE9es non-utilis\xE9s dans le batch.
En plus de l'objectif de minimiser le co\xFBt et la pr\xE9cision, le but est de r\xE9duire la diff\xE9rence entre les courbes bleu et orange.
<br><br>
Dans la prochaine activit\xE9, nous allons nous assurer que les deux mod\xE8les (kNN et le MLP) g\xE9n\xE9ralisent bien sur de nouvelles donnn\xE9es en les \xE9valuant sur les donn\xE9es de <b>test</b>.
`);ke.title=e.training.mlp.text.title;const w=Fe({k:1,dataStore:f}).sync("mlp-vs-knn-knn"),O=pe(w);O.title=e.training.knn.params;const K=me(w);K.title=e.training.knn.progress;const y=Je({layers:[64],epochs:20,dataStore:f}).sync("mlp-vs-knn-mlp"),F=pe(y);F.title=e.training.mlp.params;const J=me(y);J.title=e.training.mlp.progress;const G=Ge(y);G.title=e.training.mlp.plot;I.$click.subscribe(()=>{w.train(u,"raw_features")});D.$click.subscribe(()=>{y.train(u)});const yt=o(v(e.evaluation.video.url,e.evaluation.video.title,e.evaluation.video.width,e.evaluation.video.height));yt.title=e.evaluation.video.title;const Me=o(`
\xC0 pr\xE9sent que nos deux mod\xE8les d'apprentissage sont entra\xEEn\xE9s, nous allons \xE9valuer leurs performances sur l'<b>ensemble de tests</b>.
L'ensemble de test contient des images que le mod\xE8le n'a pas encore vues.
<br>
Nous allons utiliser deux mesures pour \xE9valuer nos mod\xE8les: 
<ul>
<li> La <b>mesure de pr\xE9cision globale</b> (global accuracy), qui se calcule comme le nombre de bonnes pr\xE9dictions sur l'ensemble divis\xE9 par la taille de l'ensemble.
<li> La <b>matrice de confusion</b> qui est un tableau dont les lignes sont les cat\xE9gories r\xE9elles (que doit pr\xE9dire le classifieur) et les colonnes sont les cat\xE9gories estim\xE9es (qu'a effectivement pr\xE9dit le classifieur).
Un classifieur est bon sur l'ensemble test\xE9 si les valeurs de la matrice de corr\xE9lation se concentrent sur la diagonale: les cat\xE9gories que doit pr\xE9dire le classifieur sont effectivement celles pr\xE9dites.
</ul>
<br>
Appliquons ces outils d'\xE9valuation sur nos deux classifieurs (kNN et MLP) et nos deux ensembles (entra\xEEnement et test).
<br>
<br>
<b>Exercice:</b> Mettre \xE0 jours les pr\xE9dictions (pr\xE9cisions et matrices confusions) sur les mod\xE8les et les ensembles.
<br><br>
Pour interpr\xE9ter ces r\xE9sultats, on peut distinguer quatre situations:
<ol>
<li> Le mod\xE8le a une bonne pr\xE9cision sur l'ensemble d'entra\xEEnement et l'ensemble de test.
C'est ce que l'on cherche \xE0 avoir et qui permet de dire que le classifieur sait g\xE9n\xE9raliser ce qu'il a appris sur de nouvelles donn\xE9es.
<li> Le mod\xE8le n'a pas une bonne pr\xE9cision ni sur l'ensemble d'entra\xEEnement ni sur l'ensemble de test.
Dans ce cas, on dit que le mod\xE8le a <b>sous-appris</b> ou qu'il n'a pas appris tout court.
<li> Le mod\xE8le a une bonne pr\xE9cision sur l'ensemble d'entra\xEEnement mais pas l'ensemble de test. 
On dit que le mod\xE8le a <b>sur-appris</b>. Le mod\xE8le sait reconna\xEEtre les images qu'il a d\xE9j\xE0 vu mais ne sait pas g\xE9n\xE9raliser avec de nouvelles images.
<li> Le mod\xE8le a une bonne pr\xE9cision sur l'ensemble de test mais pas l'ensemble d'entra\xEEnement.
C'est une situation qui n'arrive rarement dans la pratique, elle peut signifier un manque de donn\xE9es.
</ol>
<br>
<b>Exercice:</b> Lequel de vos mod\xE8le (kNN ou MLP) est le plus performant? Est-ce qu'un mod\xE8le a sur-appris ou sous-appris?<br>
<br>
Dans la pratique, il faudrait retourner aux \xE9tapes pr\xE9c\xE9dentes depuis la collecte de donn\xE9es pour essayer d'augmenter la pr\xE9cision de vos mod\xE8les si celle-ci est mauvaise. 
`);Me.title=e.evaluation.text.title;const Q=S({name:"MLP_train",dataset:u,dataStore:f}),W=S({name:"KNN_train",dataset:u,dataStore:f}),H=S({name:"MLP_test",dataset:d,dataStore:f}),Y=S({name:"KNN_test",dataset:d,dataStore:f}),R=g(e.evaluation.knn.button.content);R.title=e.evaluation.knn.button.title;const $=g(e.evaluation.mlp.button.content);$.title=e.evaluation.mlp.button.title;const Z=z(Q);Z.title=e.evaluation.mlp.matrix.train;const X=z(W);X.title=e.evaluation.knn.matrix.train;const ee=z(H);ee.title=e.evaluation.mlp.matrix.test;const te=z(Y);te.title=e.evaluation.knn.matrix.test;R.$click.subscribe(async()=>{w.ready||he(new Error("Le classifieur kNN n'a pas \xE9t\xE9 entra\xEEn\xE9 sur les donn\xE9es d'entra\xEEnement")),await W.clear(),await Y.clear(),await W.predict(w,u),await Y.predict(w,d)});$.$click.subscribe(async()=>{w.ready||he(new Error("Le classifieur MLP n'a pas \xE9t\xE9 entra\xEEn\xE9 sur les donn\xE9es d'entra\xEEnement")),await Q.clear(),await H.clear(),await Q.predict(y,u),await H.predict(y,d)});const Lt=o(v(e.deployment.video.url,e.deployment.video.title,e.deployment.video.width,e.deployment.video.height));Lt.title=e.deployment.video.title;const Se=o(`
Maintenant que nous avons deux mod\xE8les d'apprentissage entra\xEEn\xE9s, on peut inspecter quelles sont les situations o\xF9 nos mod\xE8les \xE9chouent.
<br>
<br>
<b>Exercice:</b><br>
Vous pouvez s\xE9lectionner les images des ensembles d'entra\xEEnement ou de test afin de visualiser leurs pr\xE9dictions.
<br>
Si vous disposez d'une webcam, vous pouvez filmer votre environnement pour tester votre algorithme (adapt\xE9 pour miniMASK et miniTRASH). Vous devez auparavant activer votre cam\xE9ra en haut \xE0 gauche.
<br>
<br>
<b>Exercice:</b> Imaginez des situations dans lequel votre algorithme pourrait-\xEAtre d\xE9ploy\xE9. Quelles seraient les r\xE9percussions humaines de votre algorithme s'il commettait une erreur? Et s'il n'en faisait pas?
<br>
<br>
Les param\xE8tres de vos algorithmes entra\xEEn\xE9s peuvent \xEAtre enregistr\xE9s pour \xEAtre ensuite importer dans un outil de programmation (comme python).<br><br>
<b>Exercice:</b> Allez dans les param\xE8tres en cliquant sur l'ic\xF4ne <img size="5%" src="https://www.lisn.upsaclay.fr/~tsanchez/activite_ia/assets/images/settings.png" > puis cliquer sur "Download Model" pour t\xE9l\xE9charger les param\xE8tres du perceptron (MLP) entra\xEEn\xE9.
Vous aurez deux fichiers \xE0 t\xE9l\xE9charger: un fichier .json (comprenant l'architecture du perceptron) et un fichier .bin (contenant les poids des connexions entre les neurones).
<b>
`);Se.title=e.evaluation.text.title;const Pt=L.$images.filter(()=>L.$active.value).map(async t=>A.process(t)).awaitPromises(),_t=x.$selected.filter(t=>t.length===1).map(([t])=>u.get(t)).awaitPromises().map(t=>t.x),Nt=q.$selected.filter(t=>t.length===1).map(([t])=>d.get(t)).awaitPromises().map(t=>t.x),ze=Nt.merge(_t).merge(Pt),kt=L.$images.filter(()=>L.$active.value),Mt=x.$selected.filter(t=>t.length===1).map(([t])=>u.get(t)).awaitPromises().map(t=>t.image),St=q.$selected.filter(t=>t.length===1).map(([t])=>d.get(t)).awaitPromises().map(t=>t.image);function zt(t){var s=new Uint8ClampedArray(t.width*t.height*4);for(let n=0;n<=3;n++)for(let a=0;a<t.width;a++)for(let r=0;r<t.height;r++)s[a*t.width*4+r*4+n]=t.data[a*t.width*4+(t.width-r)*4+n];var i=new ImageData(s,t.width,t.height);return i}const Et=kt.map(async t=>zt(t)).awaitPromises(),Ct=Et.merge(Mt).merge(St),se=Qe(Ct);se.title=e.deployment.display;const jt=ze.map(async t=>y.predict(t)).awaitPromises(),At=ze.map(async t=>w.predict(t)).awaitPromises(),ie=be(jt);ie.title=e.deployment.mlp.plot;const ne=be(At);ne.title=e.deployment.knn.plot;const It=o(v(e.adversarial.video.url,e.adversarial.video.title,e.adversarial.video.width,e.adversarial.video.height));It.title=e.adversarial.video.title;const Dt=o(`
Attaque adversaire, hacking ... `);Dt.title=e.adversarial.text.title;const Ee=o(`
Ce travail pratique a \xE9t\xE9 \xE9crit par:
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
Jules Fran\xE7oise, Baptiste Caramiaux, T\xE9o Sanchez. <b>Marcelle: Composing Interactive Machine Learning Workflows and Interfaces.</b> Annual ACM Symposium on User Interface Software and Technology (UIST \u201921), Oct 2021, Virtual. DOI: 10.1145/3472749.3474734.
`);Ee.title=e.credits.text.title;const Rt=o(v(e.research.video.url,e.research.video.title,e.research.video.width,e.research.video.height));Rt.title=e.research.video.title;const Ce=o(`

Nous vous serions tr\xE8s reconnaissant de r\xE9pondre \xE0 ce <a href="#aider-la-recherche">questionnaire anonyme<a>.
<br>
<br>
Les r\xE9ponses serviront la recherche publique \xE0 comprendre ce que vous avez appris et ce que vous pensez du domaine de l'intelligence artificielle.
Les donn\xE9es sont anonymes et stock\xE9s sur un serveur \xE0 l'universit\xE9 fran\xE7aise (Universit\xE9 Paris-Saclay). De plus, l'\xE9tude a \xE9t\xE9 approuv\xE9e par un comit\xE9 \xE9thique de recherche en charge de veiller \xE0 la bonne protection, l'utilisation et la confidentialit\xE9 des donn\xE9es collect\xE9es.`);Ce.title=e.research.text.title;const je=o(`Maintenant que vous avez compris les diff\xE9rentes \xE9tapes de l'apprentissage automatique, vous pouvez continuer \xE0 explorer d'autres jeux de donn\xE9es.
Tous les outils des pages pr\xE9c\xE9dentes ont \xE9t\xE9 regroup\xE9s ici. L'explorateur des donn\xE9es a \xE9t\xE9 d\xE9plac\xE9 dans la barre lat\xE9rale de gauche.
<br><br>
<b>Exercice:</b> R\xE9entra\xEEner les classieurs d'images sur d'autres donn\xE9es.`);je.title="";const c=We({title:e.misc.dashboards.title,author:e.misc.author.name});c.page(e.introduction.name).sidebar().use(fe,"Conseils",we);c.page(e.history.name).sidebar().use("Consignes",xe,"Outils",qe);c.page(e.data.name).sidebar(C,j).use("Consignes",ye,"Outils",[x,q]);c.page(e.embedding.name).sidebar(A).use("Consignes",Pe,"Outils",V,[x,q]);c.page(e.training.name).sidebar().use("Consignes",_e,"k plus proches voisins (kNN)",Ne,[O,I,K],"Perceptron multicouche (MLP)",ke,[F,D,J],G);c.page(e.evaluation.name).sidebar().use("Consignes",Me,"Outils",[R,$],[X,Z],[te,ee]);c.page(e.deployment.name).sidebar(L).use("Consignes",Se,"Outils",[x,q],"Pr\xE9dictions",[se,ne,ie]);c.page("Tout en un").sidebar(j,C,x,q,L).use("Consignes",je,"Donn\xE9es","Entra\xEEnement",[O,I,K],[F,D,J],G,"\xC9valuation",[R,$],[X,Z],[te,ee],"D\xE9ploiement",[se,ne,ie]);c.page(e.research.name).sidebar().use(Ce);c.page(e.credits.name).use(Ee);c.settings.dataStores(f).datasets(u,d).models(w,y);c.show();
