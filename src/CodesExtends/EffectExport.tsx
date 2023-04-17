const gifs:any = {
    // normal:"empty",
    fighting:"https://i.gifer.com/Z92e.gif",
    flying:"data:image/jpeg;base64,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",
    poison:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e66ff75b-e872-4552-96bd-43f817903d00/daaj6vp-697353cb-2c5c-40f2-92b1-89e51afa95af.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2NmZmNzViLWU4NzItNDU1Mi05NmJkLTQzZjgxNzkwM2QwMFwvZGFhajZ2cC02OTczNTNjYi0yYzVjLTQwZjItOTJiMS04OWU1MWFmYTk1YWYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.e_7D6cw5c8DwUhjSFiAxdJwP4bIANVXe5PZSi_Xto6M",
    // ground:"ground",
    // rock:"rock",
    // bug:"bug",
    // ghost:"ghost",
    // steel:"steel",
    fire:"https://i.gifer.com/origin/a9/a95ef9bce2a1d53accc6a8018df04ff6_w200.gif",
    water:"https://img1.picmix.com/output/stamp/normal/1/4/8/3/1853841_1ec2d.gif",
    grass:"https://img1.picmix.com/output/stamp/thumb/8/6/4/7/1007468_b04a4.gif",
    electric:"https://cutewallpaper.org/24/lightning-gif-transparent/lighteninganimatedgif2-photoatelier-blog.gif",
    psychic:"https://i.pinimg.com/originals/6d/72/76/6d7276c539fadc9d70e8d86aeefe2a84.gif",
    ice:"https://www.icegif.com/wp-content/uploads/2022/01/icegif-1022.gif",
    dragon:"https://ugokawaii.com/wp-content/uploads/2022/08/slashing-effect-1024x1024.gif",
    dark:"https://www.pngmart.com/files/15/Black-Smoke-Effect-PNG.png",
    fairy:"https://media.tenor.com/_ZTkC0689ucAAAAi/rainbow-stars-stars.gif",
    // unknown:"unknown",
    shadow:"https://orangemushroom.files.wordpress.com/2022/06/stardust-effect-explosion.gif",
}

export const EffectExport = (effect: string) => {
    if(gifs[effect]){
        return(gifs[effect])
    }else{
        return("")
    }
}