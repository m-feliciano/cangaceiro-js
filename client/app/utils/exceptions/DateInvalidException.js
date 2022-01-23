class DateInvalidException extends Error {
    constructor(){
        super("The date must be in dd/mm/yyyy format")
        // fix name error
        this.name = this.constructor.name;
    }
}