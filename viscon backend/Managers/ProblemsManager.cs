using viscon_backend.Models;

namespace viscon_backend;

class ProblemsManager {
    private readonly Database _database;
    public ProblemsManager(Database database) =>
        _database = database;

    public void AddProblems() {
        Problem problem = new Problem();
        problem.Description = "";
        problem.Machine = new Machine();
        
        _database.Problems.Add(problem);
    }

    public void GetProblemsFromMachine(Machine machine) {
        var filteredList = _database.Problems.Where(x => x.Machine == machine).ToList();
    }
}
