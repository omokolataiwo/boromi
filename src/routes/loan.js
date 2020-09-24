import { Router } from 'express';
import * as Loan from '../controllers/Loan';

const router = Router();

router.get('/', Loan.allLoans);
router.post('/', Loan.newLoan);
router.post('/:loanId/repayment', Loan.repaymentPlan);
router.patch('/:loanId', Loan.update);
router.get('/:loanId', Loan.details);

export default router;