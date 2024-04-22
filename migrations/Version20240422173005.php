<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240422173005 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user (
            id INT AUTO_INCREMENT NOT NULL, 
            email VARCHAR(180) NOT NULL, 
            roles JSON NOT NULL COMMENT \'(DC2Type:json)\', 
            UNIQUE INDEX UNIQ_IDENTIFIER_EMAIL (email), 
            PRIMARY KEY(id)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');

        $this->addSql('CREATE TABLE note (
            id INT AUTO_INCREMENT NOT NULL, 
            user_id INT NOT NULL, 
            text LONGTEXT DEFAULT \'\' NOT NULL,
            status VARCHAR(100) DEFAULT \'\' NOT NULL, 
            created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', 
            deleted_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', 
            INDEX IDX_CFBDFA14A76ED395 (user_id), 
            PRIMARY KEY(id)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE note ADD CONSTRAINT FK_CFBDFA14A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE note DROP FOREIGN KEY FK_CFBDFA14A76ED395');
        $this->addSql('DROP TABLE note');
        $this->addSql('DROP TABLE user');
    }
}
