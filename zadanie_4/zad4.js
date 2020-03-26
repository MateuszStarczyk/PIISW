var accountMaker = function(spec) {

    val balance = 0,
        number = spec.number,
        creationDate = spec.creationDate,
        currency = spec.currency;
    return {
        debit: function (amount) {
            if (amount < 0) {
                throw new Error('Illegal amount');
            }
            if (this.balance < amount) {
                throw new Error('Insufficient account balance');
            }
            this.balance -= amount;
            return this.balance;
        },
        credit: function (amount) {
            if (amount < 0) {
                throw new Error('Illegal amount');
            }
            this.balance += amount;
            return this.balance;
        }
    };
};

var account = accountMaker({number: 12345678901, currency: 'PLN', creationDate: Date.now()});
var account2 = accountMaker({number: 12345678901, currency: 'PLN', creationDate: Date.now()});