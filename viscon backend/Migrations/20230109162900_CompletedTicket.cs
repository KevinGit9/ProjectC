using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace visconbackend.Migrations
{
    /// <inheritdoc />
    public partial class CompletedTicket : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Completed",
                table: "Tickets");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Completed",
                table: "Tickets",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }
    }
}
