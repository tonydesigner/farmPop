export function Destaques(){
    const dest = 
    [
        {img:'https://i.pinimg.com/736x/1b/e7/5c/1be75c6b612364f4530e64c1962b421e.jpg', desc:'', prod:""},
        {img:'https://www.i7noticias.com/uploads/editor/2019/38/10032020103946.jpg', desc:'', prod:""},
        {img:'https://www.i7noticias.com/uploads/editor/2019/38/10032020103943.jpg', desc:'', prod:""},
        {img:'https://cdn.okad.com.br/media/24200/47213936.jpg', desc:'', prod:""},
    ]
    return(
        <div className="destaques margin">
            {
                dest.map((i)=>
                    <div className="cx">
                       <img src={i.img} alt="" />
                    </div>
                )
            }
        </div>
    )
}