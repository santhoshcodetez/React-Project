const express=require("express")
const routes=express()
const customercontroller=require('../controller/customercontroller')
const bookcontroller=require('../controller/bookcontroller')
const ordercontroller=require('../controller/ordercontroller')
const employecontroller=require('../controller/employeecontroller')


routes.get('/getcustomer',customercontroller.readCustomer)
routes.post('/postcustomer',customercontroller.createCustomer)
routes.delete('/deletecustomer',customercontroller.deleteCustomer)
routes.put('/updatecustomer',customercontroller.updateCustomer)

routes.get('/getbook',bookcontroller.readCustomer)
routes.post('/postbook',bookcontroller.createCustomer)
routes.delete('/deletebook',bookcontroller.deleteCustomer)
routes.put('/updatebook',bookcontroller.updateCustomer)
routes.get('/getbyidbook',bookcontroller.customerdata)

routes.get('/getorder',ordercontroller.readCustomer)
routes.post('/postorder',ordercontroller.createCustomer)
routes.delete('/deleteorder',ordercontroller.deleteCustomer)
routes.put('/updateorder',ordercontroller.updateCustomer)
routes.get('/discounthere',ordercontroller.orderfn)
routes.get('/orderfn',ordercontroller.functionhere)

routes.get('/getemployee',employecontroller.readCustomer)
routes.post('/postemploye',employecontroller.createCustomer)
routes.delete('/deleteemployee',employecontroller.deleteCustomer)
routes.put('/updateemployee',employecontroller.updateCustomer)

routes.delete('/deleteAll',customercontroller.deleteAll)

module.exports=routes