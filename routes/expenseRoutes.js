import { createExpense } from "../controller/expenseController.js";

const router = express.Router();

router.post("/expenses", createExpense);

export default router;