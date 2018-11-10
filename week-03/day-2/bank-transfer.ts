export { }

'use strict';

const accounts: any[] = [
    { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
    { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
    { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(acNum: number) {
    let userInfo: any = [];
    accounts.forEach(e => {
        if (e.accountNumber === acNum) {
            userInfo.push(e.clientName);
            userInfo.push(e.balance);
        }
    })
    console.log(userInfo);
}

getNameAndBalance(11234543);

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function moneyTransfer(ac: any[], fAcNum: number, tAcNum: number, mon: number) {
        ac.forEach(e => {
            if (e.accountNumber === fAcNum) {
                e.balance -= mon;
            }
            else if (e.accountNumber === tAcNum) {
                e.balance += mon;
            }
            else
                console.log("404 - account not found");

        });
    return ac;
}

moneyTransfer(accounts, 11234543, 43546731, 3000);
console.log(accounts);
