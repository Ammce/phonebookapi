import Person from './model';

//Function for getting all Persons from the Phonebook
export const getPersons = async (req, res) => {
    try {
        const allPersons = await Person.find({});
        res.status(200).json({ persons: allPersons })
    } catch (e) {
        return res.status(e.status).json({ error: true, message: 'Error with getting all persons' });
    }
}

//Function for creating a new Person in the database
export const createPerson = async (req, res) => {
    const { name, surname, city, address, phone } = req.body;
    const newPerson = new Person({
        name,
        surname,
        city,
        address,
        phone
    });

    try {
        return res.status(200).json({ person: await newPerson.save() })
    }
    catch (e) {
        return res.status(e.status).json({ error: true, message: 'Error with creating Person' });
    }
};

//Function for edditing a particular Person in the database
export const editPerson = async (req, res) => {
    const { personID, name, surname, city, address, phone } = req.body;

    try {
        const person = await Person.findById(personID);
        person.set({
            ...person,
            name,
            surname,
            city,
            address,
            phone
        })
        return res.status(200).json({ person: await person.save() })
    } catch (e) {
        return res.status(e.status).json({ error: true, message: 'Error with updating Person' });
    }
}

//Function for deleting particular Person in the database
export const deletePerson = async (req, res) => {
    const personID = req.params.id;
    try {
        res.status(200).json({ deleted: await Person.findOneAndRemove({ _id: personID }) });
    } catch (e) {
        return res.status(e.status).json({ error: true, message: 'Error with deleting Person' });
    }
}