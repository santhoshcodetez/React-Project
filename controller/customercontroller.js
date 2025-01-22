const { customer, Books, employee, order } = require('../models');
const books = require('../models/books');

// CRUD Operation

const createCustomer = async (req, res) => {
    try {
        // Create customer
        const newCustomer = await customer.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            contact: req.body.contact,
            address: req.body.address,
            membershipLevel: req.body.membershipLevel,
            joinDate: req.body.joinDate,
            genreBook: req.body.genreBook,
            status: req.body.status,
        });
            //Create Books
        for (const book of req.body.Books) {
            await Books.create({
                title: book.title,
                author: book.author,
                genre: book.genre,
                bookCode: book.bookCode,
                publisher: book.publisher,
                publishYear: book.publishYear,
                status: book.status,
                customerId: newCustomer.id,
            })
        };
            // Create Employee
        for (const emp of req.body.employee) {
            await employee.create({
                firstName: emp.firstName,
                lastName: emp.lastName,
                email: emp.email,
                contact: emp.contact,
                position: emp.position,
                salary: emp.salary,
                hireDate: emp.hireDate,
                department: emp.department,
                status: emp.status,
                customerId: newCustomer.id

            })

        }
        for (const ord of req.body.order) {
            await order.create({
                customerId: newCustomer.id,
                orderDate: ord.orderDate,
                totalAmount: ord.totalAmount,
                status: ord.status,
                paymentmethod: ord.paymentmethod,
                shippingAddress: ord.shippingAddress,
                orderStatus: ord.orderStatus,
                discountApplied: ord.discountApplied,
                //Finalprice:ord.totalamount/ord.
                deliveryDate: ord.deliveryDate,
                customerId: newCustomer.id
            })
        }
        res.status(201).json({ message: "Customer and books created successfully", data: newCustomer });
    }
    catch (error) {
        console.error(error);  // Log the error for debugging
        res.status(400).json({ message: "Error creating customer and book data", error: error.message });
    }
}

// const readCustomer = async (req, res) => {
//     try {
//         const customerData = await customer.findAll({
//             where: {
//                 [Op.and]: customer.sequelize.literal(
//                     `EXISTS (SELECT id FROM public.customers WHERE customers.id = customer.id)`
//                 )},
                
              
//             include: [
//                 {
//                     model: Books,
//                     as: 'booksId',
//                 },
//                 {
//                     model: employee,
//                     as: 'employeedetails',
//                 },
//                 {
//                     model: order,
//                     as: 'orderDetails',
//                 },
//             ],
//         });
//         console.log(customerData.defaultvalue);

//         res.status(200).json({ message: "Data retrieved successfully", data: customerData });
//     } catch (error) {
//         console.error(error);
//         res.status(400).json({ message: "Error retrieving the data", error: error.message });
//     }
// };

const readCustomer = async (req, res) => {
    try {
        const customerData = await customer.findAll({
            attributes: [
                [customer.sequelize.literal(`COUNT(*)`), 'totalCustomers']
            ]
        
    });

        res.status(200).json({ message: "Data retrieved successfully", data: customerData });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error retrieving the data", error: error.message });
    }
};

const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.body;  // Assuming the ID is passed in the URL (e.g., /customers/:id)
        const deleteCustomer = await customer.destroy({ where: { id } });

        if (deleteCustomer) {
            res.status(200).json({ message: "Customer data deleted successfully" });
        } else {
            res.status(404).json({ message: "Customer not found" });
        }
    } catch (error) {
        console.error(error);  // Log the error for debugging
        res.status(400).json({ message: "Error deleting customer data", error: error.message });
    }
}

const updateCustomer = async (req, res) => {
    try {
        const { id, ...rowsupdate } = req.body;
        const updateResult = await customer.update(rowsupdate, { where: { id } });

        if (updateResult[0] > 0) {
            res.status(200).json({ message: "Customer data updated successfully" });
        } else {
            res.status(404).json({ message: "No customer found with the given ID" });
        }
    } catch (error) {
        console.error(error);  // Log the error for debugging
        res.status(400).json({ message: "Error updating customer data", error: error.message });
    }
}

const deleteAll = async (req, res) => {
    try {
        await customer.destroy({
            where: {},
            truncate: true
        })
        await Books.destroy({
            where: {},
            truncate: true
        })
        await employee.destroy({
            where: {},
            truncate: true
        })
        await order.destroy({
            where: {},
            truncate: true
        })
        res.status(200).json({ message: "deleted all the records in customer table , Books table , order table and employee table", })
    } catch (error) {
        res.status(400).json({ message: "error to delete the records", error: error.message })
    }
}
module.exports = { updateCustomer, deleteCustomer, readCustomer, createCustomer, deleteAll }
