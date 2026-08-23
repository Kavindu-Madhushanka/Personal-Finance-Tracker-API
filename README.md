# Personal Finance Tracker API 🚀

A simple yet robust RESTful API built with ASP.NET Core Web API. While the business logic is kept simple (managing income and expenses), this project heavily focuses on implementing industry-standard **Software Engineering concepts** and **best practices**. I built this primarily as a learning project to master core backend architectures and DevOps workflows.

## 🛠️ Key Concepts & Technologies Used

- **ASP.NET Core Web API:** Built using the latest .NET framework.
- **Clean Architecture Principles:** Separation of concerns using Controllers, Repositories, Models, and DTOs to make the codebase scalable and maintainable.
- **Entity Framework Core & Migrations:** Code-first approach for database schema management.
- **Swagger (OpenAPI):** Auto-generated, interactive API documentation and testing UI.
- **Cloud Database:** Integrated with a live SQL Server database on Somee Cloud.
- **Docker:** Containerized the application for consistent development and deployment environments.
- **GitHub Actions:** Automated CI/CD pipelines for seamless integration.

## 💡 Why This Project?

This project is not about complex algorithms; it's about building a solid foundation. By implementing the above concepts, it demonstrates how a production-grade backend is structured, documented, and deployed.

## 🚀 How to Run Locally

1. Clone the repository: `git clone <your-repo-link>`
2. Update the `appsettings.json` with your SQL Server connection string.
3. Apply migrations: `dotnet ef database update`
4. Run the project: `dotnet run`
5. Navigate to `https://localhost:<port>/swagger` to test the API.
