const { where } = require('sequelize')
const { Books } = require('../models')
// CRUD Operation

const createCustomer = async (req, res) => {
    try {
        const customer = await Books.create(req.body)
        res.status(200).json({meesage:"Created data sucessfully",data:customer})

    } catch (error) {
        res.status(400).json({meesage:"error to create a data",error:error.message})
    }

}
const customerdata=async(req,res)=>{
    try {
        const customerData = await Books.findAll({
            attributes: [
             
                [Books.sequelize.literal(`count(id)`), 'Totalcount']
            ]
        });         
       res.status(200).json({message:"get the sequelize data ",customerData})
        
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"error to get the data",error:error.message})
    }
}

const readCustomer=async(req,res)=>{
    try {
        const readCustomer=await Books.findAll();
        res.status(200).json({message:"get the data sucessfully",data:readCustomer})
    } catch (error) {
        res.status(400).json({message:"error to get the data",error:error.message})
    }
}

const deleteCustomer=async(req,res)=>{
        try {
            const {id}=req.body;
            const deleteCustomer=await Books.destroy({where:{id}})
            res.status(200).json({message:"delete the customer data sucessfully ",data:deleteCustomer})

        } catch (error) {
            res.status(400).json({message:"error to delete the customer data",error:error.message})
        }
}
const updateCustomer=async(req,res)=>{
    try {
        const{id,...rowsupdate}=req.body;
        const deletecustomer=await Books.update(rowsupdate,{where:{id}})
        if (deletecustomer[0]>0) {
            res.status(200).json({message:"updated the data sucessfully"})
        } else {
            res.status(404).json({message:"No data found"})
        }
    } catch (error) {
        res.status(400).json({message:'error to update the customer data',error:error.message})
        
    }
    
}

module.exports={updateCustomer,deleteCustomer,readCustomer,createCustomer,customerdata}