export class Song {

    public title: string;
    public author: string;
    public id:string;
    public authorText: string;
    public attachments: string[];
    public attachBaseUrl: string;
    public tags:string[];
    public ref1:string;
    public ref2:string;
    public yearpublished:string;
    public publisher:string;
    public album:string;
    public attachmentsLinks: string[];
    public fulltext:string;

    constructor(id:string, title:string, author:string, authorText:string, 
        tags:string[],
        attachments:string[],attachmentsLinks:string[], attachBaseUrl:string,ref1:string,ref2:string,
        yearpublished:string,publisher:string,album:string,fulltext:string){
        this.id = id;
        this.title = title;
        this.author = author;
        this.authorText = authorText;
        this.attachments = attachments;
        this.attachmentsLinks = attachmentsLinks;
        this.attachBaseUrl = attachBaseUrl;
        this.tags = tags;
        this.ref1 = ref1;
        this.ref2 = ref2;
        this.yearpublished=yearpublished;
        this.album=album;
        this.publisher=publisher;
        this.fulltext=fulltext;
    }

    public generateEmbedYoutubeUrl() {
        var i:number;
        var attachmentLink:string;
        for (i=0;i<this.attachmentsLinks.length;i++){
            attachmentLink = this.attachmentsLinks[i];
            this.attachmentsLinks[i] = attachmentLink.replace('watch','embed');
        }
    }    
}

