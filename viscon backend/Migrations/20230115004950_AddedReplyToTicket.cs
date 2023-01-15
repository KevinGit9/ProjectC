using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace visconbackend.Migrations
{
    /// <inheritdoc />
    public partial class AddedReplyToTicket : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Reply",
                table: "Tickets",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Reply",
                table: "Tickets");
        }
    }
}
