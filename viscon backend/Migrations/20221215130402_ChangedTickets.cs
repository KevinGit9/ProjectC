using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace visconbackend.Migrations
{
    /// <inheritdoc />
    public partial class ChangedTickets : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Problem",
                table: "Tickets");

            migrationBuilder.AddColumn<string[]>(
                name: "Fields",
                table: "Tickets",
                type: "text[]",
                nullable: false,
                defaultValue: new string[0]);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Fields",
                table: "Tickets");

            migrationBuilder.AddColumn<string>(
                name: "Problem",
                table: "Tickets",
                type: "text",
                nullable: true);
        }
    }
}
