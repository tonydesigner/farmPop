
export function Vsaude(){
    const med = 
    [
        
        {prod:'Nutren', desc:'Suplemento Alimentar', val:13.98, img:'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fimg.drogaraia.com.br%2Fcatalog%2Fproduct%2Fs%2Fu%2Fsuplemento-alimentar-nutren-protein-chocolate-com-260ml.jpg%3Fwidth%3D170%26height%3D170%26quality%3D85%26type%3Dresize&w=256&q=75'},
        {prod:'Soro Fisiológico', desc:'0,9% Sorimax 500ml', val:5.79, img:'https://drogariavenancio.vteximg.com.br/arquivos/ids/965798-364-364/80110_Z.jpg?v=637648134126700000'},
        {prod:'FreeStyle', desc:'Libre Sensor 1 unidade', val:289.90, img:'https://drogariavenancio.vteximg.com.br/arquivos/ids/791800-364-364/74710_Z.jpg?v=637342415813000000'},
        {prod:'Cewin', desc:'Suplemento Vitamínico', val:34.94, img:'https://drogariavenancio.vteximg.com.br/arquivos/ids/981570-364-364/78294_Z.jpg?v=637807171017730000'},
        {prod:'Caldê MDK', desc:'Suplemento Alimentar', val:79.79, img:'https://drogariavenancio.vteximg.com.br/arquivos/ids/876858-364-364/75765_Z.jpg?v=637344307206830000'},
        {prod:'Ensure', desc:'Sabor Baunilha 850g', val:166.99, img:'https://www.drogariavenancio.com.br/arquivos/ids/948324-364-364/78188_Z.jpg?v=637606757455600000'},
    ]
  
return(
    <div className="med">
        <h3>Saúde e Bem Estar</h3>
        <div className="prod  margin">
        {
            
            med.map((i, index)=>
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