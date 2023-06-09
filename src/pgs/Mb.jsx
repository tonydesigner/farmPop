
export function Mb(){
    const med = 
    [
        
        {prod:'Fralda', desc:'Pampers Confort Sec', val:86.49, img:'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fimg.drogaraia.com.br%2Fcatalog%2Fproduct%2Ff%2Fr%2Ffralda_pampers_confort_sec_tamanho_xg_62_tiras_7500435106719_2_.jpg%3Fwidth%3D450%26height%3D450%26quality%3D85%26type%3Dresize&w=384&q=75'},
        {prod:'Shampoo', desc:'Johnsons Baby Regular', val:19.75, img:'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fimg.drogaraia.com.br%2Fcatalog%2Fproduct%2Fs%2Fh%2Fshampoo-johnson_s-baby-regular-400ml-7891010800048_hero.jpg%3Fwidth%3D170%26height%3D170%26quality%3D85%26type%3Dresize&w=256&q=75'},
        {prod:'Shampoo', desc:'Huggies Infantil', val:16.39, img:'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fimg.drogaraia.com.br%2Fcatalog%2Fproduct%2Fs%2Fh%2Fshampoo-infantil-huggies-extra-suave-com-200ml-7.jpg%3Fwidth%3D170%26height%3D170%26quality%3D85%26type%3Dresize&w=256&q=75'},
        {prod:'Shampoo', desc:'Baby Dove hidratação', val:12.96, img:'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fimg.drogaraia.com.br%2Fcatalog%2Fproduct%2Fs%2Fh%2Fshampoo-baby-dove-hidratacao-enriquecida-cabelos-claros-com-200ml-2.jpg%3Fwidth%3D170%26height%3D170%26quality%3D85%26type%3Dresize&w=256&q=75'},
        {prod:'Shampoo', desc:'Looney Tunes infantil', val:19.99, img:'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fimg.drogaraia.com.br%2Fcatalog%2Fproduct%2Fp%2Fr%2Fprod_20220518183614946.jpg%3Fwidth%3D170%26height%3D170%26quality%3D85%26type%3Dresize&w=256&q=75'},
        {prod:'Kit Shampoo', desc:'Looney Tunes e Piupiu', val:36.47, img:'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fimg.drogaraia.com.br%2Fcatalog%2Fproduct%2Fp%2Fr%2Fprod_202205181836146455.jpg%3Fwidth%3D170%26height%3D170%26quality%3D85%26type%3Dresize&w=256&q=75'},
    ]
  
return(
    <div className="mb">
        <h3>Mamãe e Bebê</h3>
        <div className="prod  margin">
        {
            med.map(i=>
                    <div className="box">
                        <h3>{i.prod} </h3>
                        <img src={i.img} alt="" />
                        <p>{i.desc}</p>
                        <span>R$ {i.val}</span>
                    </div>

                )
        }
        </div>
    </div>
)
}