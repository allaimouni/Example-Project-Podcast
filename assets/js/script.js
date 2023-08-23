const getViewportWidth = () => window.innerWidth || 
 document.documentElement.clientWidth;
 console.log("Die Viewport-Breite beträgt:"+getViewportWidth());
 console.log(screen.width);
 if(screen.width <= 768){
  // alert('warning!!') ;
 }
 
 function Podcast(titel, beschreibung, autor, besitzerName,besitzerEmail,bild){
    this.titel=titel;
    this.beschreibung=beschreibung;
    this.autor=autor;
    this.besitzerName=besitzerName;
    this.besitzerEmail=besitzerEmail;
    this.bildUrl=bild;
    this.feedUrl=document.URL;
    this.kategorien=["Technology","Web-Engineering"];
    this.date=new Date();
    this.Episode=new Array();
    this.addEpisode=function(){
      for (let i=0; i < arguments.length; i++) {
        this.Episode.push(arguments[i]);
    }   
      this.Episode.sort(function(a,b){
        return b.date-a.date;
      })
    };
 }
 
 function Episode(titel,beschreibung,dauer){
  this.titel1=titel;
  this.beschreibung=beschreibung;
  this.dauer=dauer;
  this.date=new Date();
  this.getDauerInStundenUndMinuten= function(){
  let totalmin=Math.floor(this.dauer/60000);
    let min=totalmin%60;
    let hour=Math.floor(totalmin/60);;
    let erg=hour+"h "+min+"min";
    //console.log(erg.toString());
    return erg.toString();
};

 }
 //um die Podcast die Episoden verwalten zu können
 Object.setPrototypeOf(Episode,Podcast);

 Object.setPrototypeOf(EpisodeAudio, Episode);
 
 /*let url="C:\\Users\\masaa\\OneDrive\\Desktop\\VS\\WebP\\The_danger_of_silence___Clint_SmithMP3_70K.mp3";
 //todo
 console.log(url.substr(url.length-3));
 */

 function EpisodeAudio(url,groesse){
  this.url=url;//"C:\\Users\\masaa\\OneDrive\\Desktop\\VS\\WebP\\The_danger_of_silence___Clint_SmithMP3_70K.mp3";
  //todo
  this.groesse=groesse;
  this.typ=url.substr(url.length-3);
 }

 Object.setPrototypeOf(EpisodeAudio, Episode);

//Aufgabe 4 
 let podcast1= new Podcast("workingDraft","programmierung","unbekannt", "lala","beispiel@gmail.com","C:\\Users\\masaa\\OneDrive\\Desktop\\VS\\WebP\\assets\\img\\images.png");
 let podcast2= new Podcast("W","Politik","unbekannt1", "lili","beispiel2@gmail.com","C:\\Users\\masaa\\OneDrive\\Desktop\\VS\\WebP\\assets\\img\\logo.png");
 let array=[podcast1,podcast2];
 let ep1=new Episode("ep1","probleme",1000000);
 let ep2=new Episode("ep2","probleme2",50000000);
 let ep3=new Episode("ep1.2","Loesungen",1000000);
 let ep4=new Episode("ep1.3","Loesungen2",60000000);
 podcast1.addEpisode(ep1,ep2);
 podcast2.addEpisode(ep3,ep4);

 for(let i of array){
  console.log(i.titel+":");
  for(let e =0 ; e<i.Episode.length; e++)
    console.log(`${i.Episode[e].titel1}`+"   "+"("+`${i.Episode[e].getDauerInStundenUndMinuten()}`+")");
 }


