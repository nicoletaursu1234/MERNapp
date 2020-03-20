const Article= require('../models/article-model');

createArticle=(req, res)=>{
    const body=req.body;

    if(!body){
        return res.status(400).json({
            succes:false,
            error:"Introduceti un articol",
        })
    }

    const article= new Article(body)

    // if(!article){
    //     return res.status(400).json({succes:false, error: err})
    // }

    article
        .save()
        .then(()=>{
            return res.status(201).json({
                succes: true,
                id: article_id,
                message: 'Articolul a fost creat',
            })
        })
        .catch(error=>{
            return res.status(400).json({
                error,
                message: 'Articolul nu a fost creat',
            })
        })
}
updateArticle = async (req, res)=>{
    const body=req.body

            if(!body){
                return res.status(400).json({
                    succes:false,
                    error:'Introduceti continutul articolului pentru a actualiza'
                })
            }

            Article.findOne({_id: req.params.id}, (err, foundArticle)=>{
                if(err){
                    return res.status(404).json({
                        err,
                        message: 'Articolul nu a fost gasit',
                    })
                }
                foundArticle.title=body.title,
                foundArticle.content=body.content,
                foundArticle
                    .save()
                    .then(()=>{
                        return res.status(200).json({
                            succes:true,
                            id: article._id,
                            message: 'Articolul a fost actualizat',
                        })
                    })
                    .catch(error=>{
                        return res.status(404).json({
                            error,
                            message: 'Articolul nu a fost actualizat'
                        })
                    })
            })
        
}

deleteArticle= async(req, res)=>{
    await Article.findOneAndDelete({_id: req.params.id}, (err, foundArticle)=>{
        if(err){
            return res.status(400).json({succes:false, error:err})
        }

        if(!foundArticle){
            return res
                .status(404)
                .json({succes: false, error: 'Articolul nu a fost gasit'})
        }
        return res.status(200).json({success: true, data: foundArticle})
    })
    .catch(err=>console.log(err))
}

getArticleById=async(req, res)=>{
    await Article.findOne({_id:req.params.id}, (err, foundArticle)=>{
        if(err){
            return res.status(400).json({success: false, error: err})
        }
        if(!foundArticle){
            return res
                .status(404)
                .json({succes: false, error: "Articolul nu a fost gasit"})
        }

        return res.status(200).json({success: true, data: foundArticle})
    }).catch(err=>console.log(err))
}

getArticles= async(req, res)=>{
    await Article.find({}, (err, foundArticles)=>{
        if(err){
            return res.status(400).json({success: false, error: err})
        }
        if(!foundArticles){
            return res
                .status(404)
                .json({success: false, error: 'Articolul nu a fost gasit'})
        }
        return res.status(200).json({success: true, data: foundArticles})
    }).catch(err=>console.log(err))
}

module.exports={
    createArticle,
    updateArticle,
    deleteArticle,
    getArticleById,
    getArticles,
}