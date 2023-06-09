
export function Med(){
        const med = 
        [
            
            {prod:'Glifage', desc:'GLIFAGE XR 750MG 30 CPRS', val:8.9, img:'https://santaluciadrogaria.vtexassets.com/arquivos/ids/158087/7891721027451.png?v=637638005645970000'},
            {prod:'Dipirona', desc:'Dipirona Monoidratada', val:4.23, img:'https://uploads.consultaremedios.com.br/product_variation_images/full/87d13a49ff453b78b0938b1fcfc781836f06b996.png?1615486482'},
            {prod:'Dorflex', desc:'Relaxa a tensão muscular', val:16.78, img:'https://drogariaiguatemi.com.br/pub/media/catalog/product/cache/024743edc39c5ce60fa1b6885a672b62/d/s/dsc_8184_3.jpg'},
            {prod:'Paracetamol', desc:'Paracetamol 220mg/ml', val:12.96, img:'https://drogariaspacheco.vteximg.com.br/arquivos/ids/679413-1000-1000/78867---paracetamol-220mgml-generico-medley-gotas-15ml.png?v=637565319117100000'},
            {prod:'Novalgina', desc:'Novalgina 1 G c/10', val:17.99, img:'https://drogariamaisbaratotanque.com.br/wp-content/uploads/2022/07/novalgina1-removebg-preview.png'},
            {prod:'Coristina D', desc:'Coristina® D medicamentosa.', val:36.47, img:'https://guiadafarmacia.com.br/consulta-medicamentos/wp-content/uploads/2021/07/7891142136626.png'},
        ]
      
    return(
        <div className="med">
            <h3>Medicamentos</h3>
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